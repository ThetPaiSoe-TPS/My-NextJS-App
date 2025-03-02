import { Metadata } from "next";

interface BlogPost {
  id: number;
  title: string;
  body: string;
}

async function getBlogPost(slug: string): Promise<BlogPost> {
  // Simulate fetching data from an API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  return {
    title: post.title,
    description: post.body.substring(0, 100), // Use the first 100 characters as the description
    openGraph: {
      title: post.title,
      description: post.body.substring(0, 100),
      
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}