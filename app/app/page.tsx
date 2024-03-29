"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col justify-items-center items-center">
      <div className="p-4">
        <ConnectButton />
      </div>
      <div className="card shadow card-bordered">
        <div className="card-body">
          <label className="input input-bordered flex items-center gap-2">
            Ens domain
            <input type="text" className="grow" placeholder="example.eth" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Amount
            <input type="text" className="grow" placeholder="" />
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Token
            </option>
            <option>DAI</option>
            <option>WBTC</option>
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Cancelable
            </option>
            <option>True</option>
            <option>False</option>
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Transferable
            </option>
            <option>True</option>
            <option>False</option>
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Start
            </option>
            <option>Now</option>
            <option>1 day</option>
            <option>1 week</option>
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Duration
            </option>
            <option>1 hpur</option>
            <option>1 day</option>
            <option>1 week</option>
          </select>
        </div>
      </div>
    </main>
  );
}
