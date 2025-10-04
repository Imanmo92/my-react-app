import React, { createContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'

export const WalletContext = createContext()

export const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)
  const [account, setAccount] = useState(null)
  const [chainId, setChainId] = useState(null)

  useEffect(() => {
    // optional: restore cached provider
  }, [])

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const prov = new ethers.BrowserProvider(window.ethereum)
        const signer = await prov.getSigner()
        const addr = await signer.getAddress()
        setProvider(prov)
        setSigner(signer)
        setAccount(addr)
        const network = await prov.getNetwork()
        setChainId(network.chainId)
        return { provider: prov, signer, account: addr }
      } catch (e) {
        console.error(e)
      }
    } else {
      alert('MetaMask not found. Use WalletConnect or install MetaMask.')
    }
  }

  const connectWalletConnect = async () => {
    try {
      const web3Modal = new Web3Modal({ cacheProvider: true })
      const instance = await web3Modal.connect()
      const prov = new ethers.BrowserProvider(instance)
      const signer = await prov.getSigner()
      const addr = await signer.getAddress()
      setProvider(prov)
      setSigner(signer)
      setAccount(addr)
      const network = await prov.getNetwork()
      setChainId(network.chainId)
      return { provider: prov, signer, account: addr }
    } catch (e) {
      console.error(e)
    }
  }

  const disconnect = async () => {
    setProvider(null)
    setSigner(null)
    setAccount(null)
    setChainId(null)
    try { const m = new Web3Modal(); m.clearCachedProvider(); } catch (e) {}
  }

  return (
    <WalletContext.Provider value={{ provider, signer, account, chainId, connectMetaMask, connectWalletConnect, disconnect }}>
      {children}
    </WalletContext.Provider>
  )
}
