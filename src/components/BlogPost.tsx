import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ReactMarkdown from 'react-markdown';

interface Post {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
}

export function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = React.useState<Post | null>(null);

  React.useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    if (!id) return;
    const { data } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();
    if (data) setPost(data);
  };

  if (!post) return null;

  return (
    <article className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="relative h-96 mb-8 rounded-xl overflow-hidden">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-2 text-gray-400 mb-8">
          <Calendar className="w-5 h-5" />
          <time>{new Date(post.created_at).toLocaleDateString()}</time>
        </div>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}