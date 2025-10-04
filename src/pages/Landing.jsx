import React, { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import logo from "../assets/logo.png";

export default function Landing() {
  const { account } = useContext(WalletContext);

  return (
    <section className="max-w-5xl mx-auto text-center py-20">
      {/* لوگو */}
      <div className="mb-8 flex justify-center">
        <img
          src={logo}  // مسیر درست چون از src/assets میاد
          alt="ZenChain Logo"
          className="w-48 h-48 rounded-lg object-cover"
        />
      </div>

      <h1 className="text-5xl font-bold mb-4">
        Join & Earn <br /> Loyalty Points
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Share, interact and earn XP across the ZenChain community. Connect your
        wallet to start earning rewards.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#C4FF00] to-[#32FF8A] text-black">
          WalletConnect / MetaMask
        </button>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6">
        <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
          <div className="text-sm text-gray-400">Total XP</div>
          <div className="text-3xl font-bold">1,530</div>
        </div>
        <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
          <div className="text-sm text-gray-400">Active Users</div>
          <div className="text-3xl font-bold">820</div>
        </div>
      </div>
    </section>
  );
}
