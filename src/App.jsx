import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Community from './pages/Community'
import Profile from './pages/Profile'
import Rewards from './pages/Rewards'
import Dashboard from './pages/Dashboard'

export default function App(){
  return (
    <div className="min-h-screen text-white antialiased">
      
      <Navbar />
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
