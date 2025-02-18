import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2, Plus, Save } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface Post {
  id: string;
  title: string;
  content: string;
  image_url: string;
}

export function AdminPanel() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ title: '', content: '', image_url: '' });
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
    fetchPosts();
  }, [user, navigate]);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setPosts(data);
  };

  const handleEdit = (post: Post) => {
    setIsEditing(post.id);
    setEditForm({
      title: post.title,
      content: post.content,
      image_url: post.image_url,
    });
  };

  const handleSave = async () => {
    if (!isEditing) return;

    const { error } = await supabase
      .from('blogs')
      .update({
        title: editForm.title,
        content: editForm.content,
        image_url: editForm.image_url,
      })
      .eq('id', isEditing);

    if (!error) {
      setIsEditing(null);
      fetchPosts();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchPosts();
    }
  };

  const handleCreate = async () => {
    const { error } = await supabase
      .from('blogs')
      .insert([
        {
          title: 'New Post',
          content: 'Start writing your content here...',
          image_url: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=800&q=80',
          author_id: user?.id,
        },
      ]);

    if (!error) {
      fetchPosts();
    }
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Admin Panel</h2>
          <button
            onClick={handleCreate}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition"
          >
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white/5 rounded-lg p-6 backdrop-blur-lg"
            >
              {isEditing === post.id ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className="w-full p-2 bg-white/10 rounded-lg"
                  />
                  <input
                    type="text"
                    value={editForm.image_url}
                    onChange={(e) => setEditForm({ ...editForm, image_url: e.target.value })}
                    className="w-full p-2 bg-white/10 rounded-lg"
                  />
                  <textarea
                    value={editForm.content}
                    onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                    className="w-full p-2 bg-white/10 rounded-lg h-32"
                  />
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition"
                  >
                    <Save className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-400 line-clamp-2">{post.content}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="p-2 hover:bg-white/10 rounded-lg transition"
                    >
                      <Pencil className="w-5 h-5 text-blue-400" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 hover:bg-white/10 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5 text-red-400" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}