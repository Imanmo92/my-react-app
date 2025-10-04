import React, { useState, useEffect } from 'react'

const initialCounters = {
  swap: 0, bridge: 0, gm: 0, liquidity: 0,
  social_like: false, social_post: false
}

export default function Rewards(){
  const [counters, setCounters] = useState(()=> JSON.parse(localStorage.getItem('zc_counters')) || initialCounters)

  useEffect(()=>{ localStorage.setItem('zc_counters', JSON.stringify(counters)) },[counters])

  const incr = (k, max) => {
    setCounters(c => ({...c, [k]: Math.min(max, (c[k] || 0) + 1)}))
  }
  const toggle = (k) => setCounters(c=> ({...c, [k]: !c[k]}))

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Rewards</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
          <div className="text-xl font-semibold text-green-300 mb-3">DAILY</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>React to a Post</div>
              <div className="flex items-center gap-2">
                <button onClick={()=> toggle('social_like')} className={`w-8 h-8 rounded-full ${counters.social_like ? 'bg-green-500' : 'bg-[rgba(255,255,255,0.03)]'}`}>{counters.social_like ? '✓' : ''}</button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>Make a Post</div>
              <div className="flex items-center gap-2">
                <button onClick={()=> toggle('social_post')} className={`w-8 h-8 rounded-full ${counters.social_post ? 'bg-green-500' : 'bg-[rgba(255,255,255,0.03)]'}`}>{counters.social_post ? '✓' : ''}</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
          <div className="text-xl font-semibold mb-4">DeFi Tasks</div>
          <div className="space-y-3">
            <div className="flex justify-between items-center"><div>Swap</div><div>{counters.swap}/10 <button onClick={()=>incr('swap',10)} className="ml-3 px-2 py-1 rounded bg-[rgba(255,255,255,0.03)]">Do</button></div></div>
            <div className="flex justify-between items-center"><div>Bridge</div><div>{counters.bridge}/10 <button onClick={()=>incr('bridge',10)} className="ml-3 px-2 py-1 rounded bg-[rgba(255,255,255,0.03)]">Do</button></div></div>
            <div className="flex justify-between items-center"><div>GM</div><div>{counters.gm}/1 <button onClick={()=>incr('gm',1)} className="ml-3 px-2 py-1 rounded bg-[rgba(255,255,255,0.03)]">Do</button></div></div>
            <div className="flex justify-between items-center"><div>Liquidity</div><div>{counters.liquidity}/15 <button onClick={()=>incr('liquidity',15)} className="ml-3 px-2 py-1 rounded bg-[rgba(255,255,255,0.03)]">Do</button></div></div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="px-8 py-3 rounded bg-gradient-to-r from-[#C4FF00] to-[#32FF8A] text-black">Redeem</button>
      </div>
    </section>
  )
}
