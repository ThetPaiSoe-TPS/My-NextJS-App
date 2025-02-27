// app/page.tsx (Server Component)
export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1", { next: { revalidate: 10 } }).then(res => res.json());

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
