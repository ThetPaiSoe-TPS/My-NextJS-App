import React from 'react'
interface BookProps  {
  params: { slug?: string[] };
}

const page = ({ params }: BookProps) => {
  const { slug = [] } = params;
  
   
  return (
    <div>
      <h1>Book Path: {slug.length ? slug.join('/') : 'Home'} </h1>
      <p>This is the page for book path:{slug.length? slug.join('/'): 'Home'} </p>
    </div>
  )
}

export default page
