// app/blog/data.ts
interface BlogPost {
  slug: string;
  title: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'my-first-post',
    title: 'My First Post',
    content: 'This is the content of my first blog post.',
  },
  {
    slug: 'another-post',
    title: 'Another Post',
    content: 'This is another blog post.',
  },
];