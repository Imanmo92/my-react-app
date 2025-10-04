import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { WalletContext } from '../context/WalletContext'

export default function Navbar(){
  const loc = useLocation()
  const { account, connectMetaMask, connectWalletConnect, disconnect } = useContext(WalletContext)
  const short = account ? account.slice(0,6) + '...' + account.slice(-4) : null

  return (
    <header className="bg-[rgba(0,0,0,0.25)] backdrop-blur-md border border-[rgba(255,255,255,0.03)] rounded-xl mx-6 mt-6 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded flex items-center justify-center bg-gradient-to-r from-[#C4FF00] to-[#32FF8A] text-black font-bold">Z</div>
        <nav className="flex gap-6 text-gray-200">
          <Link to="/dashboard" className={loc.pathname === '/dashboard' ? 'text-[#32FF8A]' : ''}>Dashboard</Link>
          <Link to="/community" className={loc.pathname === '/community' ? 'text-[#32FF8A]' : ''}>Community</Link>
          <Link to="/rewards" className={loc.pathname === '/rewards' ? 'text-[#32FF8A]' : ''}>Rewards</Link>
          <Link to="/profile" className={loc.pathname === '/profile' ? 'text-[#32FF8A]' : ''}>Profile</Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        {account ? (
          <div className="flex items-center gap-2">
            <div className="text-sm px-3 py-1 rounded bg-[rgba(50,255,138,0.06)] text-[#32FF8A]">{short}</div>
            <button onClick={disconnect} className="px-3 py-1 rounded bg-[rgba(255,255,255,0.03)]">Disconnect</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <button onClick={connectMetaMask} className="px-3 py-1 rounded bg-gradient-to-r from-[#C4FF00] to-[#32FF8A] text-black">MetaMask</button>
            <button onClick={connectWalletConnect} className="px-3 py-1 rounded bg-[rgba(255,255,255,0.03)]">WalletConnect</button>
          </div>
        )}
      </div>
    </header>
  )
}
