"use client";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
  Chain,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const tenderly_fork_chain = {
  id: parseInt(process.env.NEXT_PUBLIC_TENDERLY_CHAIN_ID as string),
  name: "Tenderly",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: [process.env.NEXT_PUBLIC_TENDERLY_FORK_URL as string] },
  },
  testnet: true,
} as const satisfies Chain;

const config = getDefaultConfig({
  appName: "Rapido",
  projectId: "YOUR_PROJECT_ID",
  chains: [
    {
      ...tenderly_fork_chain,
      iconBackground: "#6e56cf",
    },
  ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export default function Providers({ children }: Props) {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
      <Toaster
        toastOptions={{
          style: {
            maxWidth: "fit-content",
          },
        }}
      />
    </>
  );
}
