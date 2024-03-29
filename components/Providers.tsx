"use client";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'Rapido',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export default function Providers({ children }: Props) {
  return (
    <>
        <WagmiProvider config={config} >
          <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
              {children}
              </RainbowKitProvider>
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