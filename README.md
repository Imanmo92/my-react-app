# ZenChain - React + Tailwind + WalletConnect (Demo)

This is a demo scaffold created for testing locally.

## Quick start
1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open the URL shown by Vite (usually http://localhost:5173)

Notes:
- MetaMask integration uses ethers v6 and a BrowserProvider. WalletConnect via Web3Modal needs configuration for providerOptions in production.
- Local state (feed/xp/counters) is persisted to localStorage keys: zc_feed, zc_xp, zc_counters.
