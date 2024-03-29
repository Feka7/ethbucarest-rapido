"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { Address } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { namehash } from "viem/ens";

export default function Page() {
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount()
  const [ensDomain, setEnsDomain] = useState("");
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("");
  const [cancelable, setCancelable] = useState("");
  const [transferable, setTransferable] = useState("");
  const [start, setStart] = useState("");
  const [duration, setDuration] = useState("");

  async function approve() {
    await writeContractAsync({
      abi: [
        {
          constant: false,
          inputs: [
            {
              name: "_spender",
              type: "address",
            },
            {
              name: "_value",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              name: "",
              type: "bool",
            },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      address: token as Address,
      functionName: "approve",
      args: [
        process.env.NEXT_PUBLIC_RAPIDO_SMART_CONTRACT,
        Number(amount) * 1e18,
      ],
    });

    toast.success("Token approved succesfully!");
  }

  async function createStream() {
    await writeContractAsync({
      abi: [
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "uint128",
                  name: "totalAmount",
                  type: "uint128",
                },
                {
                  internalType: "contract IERC20",
                  name: "asset",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "cancelable",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "transferable",
                  type: "bool",
                },
                {
                  components: [
                    {
                      internalType: "uint40",
                      name: "cliff",
                      type: "uint40",
                    },
                    {
                      internalType: "uint40",
                      name: "total",
                      type: "uint40",
                    },
                  ],
                  internalType: "struct LockupLinear.Durations",
                  name: "durations",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "account",
                      type: "address",
                    },
                    {
                      internalType: "UD60x18",
                      name: "fee",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Broker",
                  name: "broker",
                  type: "tuple",
                },
              ],
              internalType: "struct LockupLinear.CreateWithDurations",
              name: "params",
              type: "tuple",
            },
            {
              internalType: "bytes32",
              name: "node",
              type: "bytes32",
            },
          ],
          name: "createWithDurations",
          outputs: [
            {
              internalType: "uint256",
              name: "streamId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      address: process.env.NEXT_PUBLIC_RAPIDO_SMART_CONTRACT as Address,
      functionName: "createWithDurations",
      args: [
        [
          address,
          process.env.NEXT_PUBLIC_RAPIDO_SMART_CONTRACT as Address,
          amount,
          token,
          cancelable === "True" ? true : false,
          transferable === "True" ? true : false,
          [0, 3600],
          ["0x0000000000000000000000000000000000000000", "0"],
        ],
        namehash(ensDomain),
      ],
    });
  }

  const handleEnsDomainChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnsDomain(event.target.value);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleTokenChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setToken(event.target.value);
  };

  const handleCancelableChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCancelable(event.target.value);
  };

  const handleTransferableChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTransferable(event.target.value);
  };

  const handleStartChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStart(event.target.value);
  };

  const handleDurationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDuration(event.target.value);
  };

  return (
    <main className="min-screen flex flex-col justify-items-center items-center">
      <div className="p-4">
        <ConnectButton />
      </div>
      <div className=" shadow card-bordered">
        <div className="card-body">
          <h3 className="card-title">Create stream</h3>
          <label className="input input-bordered flex items items-center gap-2">
            Ens domain
            <input
              type="text"
              className="grow"
              value={ensDomain}
              onChange={handleEnsDomainChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Amount
            <input
              type="text"
              className="grow"
              placeholder=""
              value={amount}
              onChange={handleAmountChange}
            />
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            value={token}
            onChange={handleTokenChange}
          >
            <option disabled value="">
              Token
            </option>
            <option value="0x6b175474e89094c44da98b954eedeac495271d0f">
              DAI
            </option>
            <option value="0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3">
              MIM
            </option>
          </select>
          <select
            className="select select-bordered w-full max-w-xs"
            value={cancelable}
            onChange={handleCancelableChange}
          >
            <option disabled value="">
              Cancelable
            </option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          <select
            className="select select-bordered w-full max-w-xs"
            value={transferable}
            onChange={handleTransferableChange}
          >
            <option disabled value="">
              Transferable
            </option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          <select
            className="select select-bordered w-full max-w-xs"
            value={start}
            onChange={handleStartChange}
          >
            <option disabled value="">
              Start
            </option>
            <option value="0">Now</option>
            <option value="3600">1 hour</option>
            <option value="86400">1 day</option>
          </select>
          <select
            className="select select-bordered w-full max-w-xs"
            value={duration}
            onChange={handleDurationChange}
          >
            <option disabled value="">
              Duration
            </option>
            <option value="3600">1 hour</option>
            <option value="86400">1 day</option>
            <option value="604800">1 week</option>
          </select>
        </div>
        <button className="btn" onClick={approve}>
          Approve
        </button>
        <button className="btn" onClick={createStream}>
          Create
        </button>
      </div>
    </main>
  );
}
