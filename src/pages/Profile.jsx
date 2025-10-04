import React, { useContext, useState, useEffect } from 'react'
import { WalletContext } from '../context/WalletContext'

export default function Profile(){
  const { account, connectMetaMask } = useContext(WalletContext)
  const [xp, setXp] = useState(() => Number(localStorage.getItem('zc_xp')||0))
  const [activeStatus, setActiveStatus] = useState('Last seen 5 minutes ago')

  useEffect(()=>{ localStorage.setItem('zc_xp', xp) },[xp])

  return (
    <section className="max-w-4xl mx-auto grid grid-cols-3 gap-6 items-start">
      <div className="col-span-2">
        <h2 className="text-4xl font-bold mb-4">Profile</h2>
        <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center">U</div>
            <div>
              <div className="text-2xl font-semibold">{account || 'Not connected'}</div>
              <div className="text-sm text-gray-400">Builder</div>
            </div>
            <div className="ml-auto">
              <button onClick={connectMetaMask} className="px-3 py-1 rounded bg-gradient-to-r from-[#C4FF00] to-[#32FF8A] text-black">Connect Wallet</button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="p-3 rounded bg-[rgba(255,255,255,0.03)]">Connect Twitter</button>
            <button className="p-3 rounded bg-[rgba(255,255,255,0.03)]">Connect Farcaster</button>
            <button className="p-3 rounded bg-[rgba(255,255,255,0.03)]">Connect Telegram</button>
            <div className="p-3 rounded bg-[rgba(255,255,255,0.03)]">Status: Active</div>
          </div>
        </div>
      </div>

      <aside>
        <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-lg mb-4">
          <div className="text-sm text-gray-400">XP</div>
          <div className="text-3xl font-bold">{xp}</div>
          <div className="text-sm text-gray-400 mt-2">{activeStatus}</div>
        </div>
      </aside>
    </section>
  )
}
