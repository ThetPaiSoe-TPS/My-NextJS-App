"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Post() {
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/posts/1", fetcher, {
    refreshInterval: 10000, // Auto refresh every 10s
  });

  if (error) return <p>Error loading data</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}
