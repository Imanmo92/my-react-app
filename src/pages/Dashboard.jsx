import React from 'react'

export default function Dashboard(){
  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
          <div className="text-sm text-gray-400">Total XP</div>
          <div className="text-2xl font-bold">1,250</div>
        </div>
        <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
          <div className="text-sm text-gray-400">Active Users</div>
          <div className="text-2xl font-bold">820</div>
        </div>
        <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
          <div className="text-sm text-gray-400">Engagement</div>
          <div className="text-2xl font-bold">75%</div>
        </div>
      </div>
    </section>
  )
}
