import React, { useEffect, useState, useContext } from 'react'
import PostCard from '../components/PostCard'
import { WalletContext } from '../context/WalletContext'

const initial = [
  { id:1, author:'Alex Henderson', time:'2h', text:'Just finished the Researcher task and bonded 5 ZEN!', image:null, likes:5, liked:false, xp:5 }
]

export default function Community(){
  const { account } = useContext(WalletContext)
  const [feed, setFeed] = useState(() => {
    try { return JSON.parse(localStorage.getItem('zc_feed')) || initial } catch { return initial }
  })
  const [text, setText] = useState('')
  const [image, setImage] = useState(null)
  const [xp, setXp] = useState(() => Number(localStorage.getItem('zc_xp')||0))

  useEffect(()=>{ localStorage.setItem('zc_feed', JSON.stringify(feed)) },[feed])
  useEffect(()=>{ localStorage.setItem('zc_xp', xp) },[xp])

  const onAttach = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev)=> setImage(ev.target.result)
    reader.readAsDataURL(file)
  }

  const createPost = ()=>{
    if (!text.trim()) return
    const p = { id:Date.now(), author: account ? account.slice(0,6) : 'Anon', time:'now', text, image, likes:0, liked:false, xp:2 }
    setFeed([p, ...feed])
    setText('')
    setImage(null)
    setXp(xp + 2)
  }

  const onLike = (id) => {
    setFeed(f=> f.map(p => p.id===id ? ({...p, likes: p.liked ? p.likes-1 : p.likes+1, liked: !p.liked}) : p))
    const liked = feed.find(p=>p.id===id)?.liked
    setXp(x=> x + (liked ? -1 : 1))
  }

  return (
    <section className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <h2 className="text-4xl font-bold mb-4">Community Feed</h2>
        <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-lg mb-4">
          <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="What's new in your Zen journey?" className="w-full p-3 bg-transparent border border-[rgba(255,255,255,0.03)] rounded text-white" rows={3} />
          <div className="flex items-center gap-2 mt-2">
            <input type="file" id="file" onChange={onAttach} className="hidden" />
            <label htmlFor="file" className="px-3 py-1 rounded bg-[rgba(255,255,255,0.03)]">Attach Image</label>
            <button onClick={createPost} className="ml-auto px-4 py-2 rounded bg-gradient-to-r from-[#C4FF00] to-[#32FF8A] text-black">Post</button>
          </div>
        </div>

        {feed.map(p => <PostCard key={p.id} post={p} onLike={onLike} />)}
      </div>

      <aside>
        <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-lg mb-4">
          <div className="text-sm text-gray-400">Your XP</div>
          <div className="text-2xl font-bold">{xp}</div>
        </div>

        <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-lg">
          <div className="font-semibold">Top Earners</div>
          <ul className="mt-3 text-gray-300">
            <li>Avery Lee - 3,250</li>
            <li>Alex Henderson - 2,400</li>
            <li>Jordyn Collins - 2,200</li>
          </ul>
        </div>
      </aside>
    </section>
  )
}
