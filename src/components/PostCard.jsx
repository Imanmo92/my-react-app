import React from 'react'

export default function PostCard({ post, onLike }){
  return (
    <article className="bg-[rgba(255,255,255,0.02)] p-4 rounded-lg mb-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">U</div>
        <div>
          <div className="font-semibold">{post.author}</div>
          <div className="text-sm text-gray-400">{post.time}</div>
        </div>
        <div className="ml-auto text-green-400">+{post.xp}</div>
      </div>
      <p className="mt-3 text-gray-200">{post.text}</p>
      {post.image && <img src={post.image} alt="post" className="mt-3 rounded-lg max-h-64 object-cover w-full" />}
      <div className="flex items-center gap-4 mt-3 text-gray-300">
        <button onClick={() => onLike(post.id)} className={`px-3 py-1 rounded ${post.liked ? 'bg-green-700 text-white' : 'bg-[rgba(255,255,255,0.02)]'}`}>Like {post.likes}</button>
        <button className="px-3 py-1 rounded bg-[rgba(255,255,255,0.02)]">Comment</button>
      </div>
    </article>
  )
}
