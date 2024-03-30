"use client";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { Address } from "viem";
import { useAccount, useEnsName, useWriteContract } from "wagmi";
import { namehash } from "viem/ens";
import { useReadContract } from "wagmi";
import { useLocalStorage } from "usehooks-ts";
import Stream from "./_components/Stream";

type Stream = {
  streamId: String;
  sender: String;
  receiver: String;
  amount: String;
  token: String;
};

export default function Page() {
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();
  const [ensDomain, setEnsDomain] = useState("");
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("");
  const [cancelable, setCancelable] = useState("");
  const [transferable, setTransferable] = useState("");
  const [start, setStart] = useState("");
  const [duration, setDuration] = useState("");
  const [value, setValue] = useLocalStorage<Stream>("sablier-stream", {
    amount: "",
    receiver: "",
    sender: "",
    streamId: "",
    token: "",
  });

  // const {data: name} = useEnsName({
  //   address: address,
  // })

  const nextStreamId = useReadContract({
    abi: [
      {
        inputs: [],
        name: "nextStreamId",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    address: process.env.NEXT_PUBLIC_SABLIER_LOCKUP_LINEAR as Address,
    functionName: "nextStreamId",
  });

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
          Number(amount) * 1e18,
          token,
          cancelable === "True" ? true : false,
          transferable === "True" ? true : false,
          [0, 3600],
          ["0x0000000000000000000000000000000000000000", "0"],
        ],
        namehash(ensDomain),
      ],
    });
    setValue({
      streamId: nextStreamId.data?.toString() || "",
      amount: amount,
      receiver: ensDomain,
      sender: address || "",
      token: "DAI",
    });
    nextStreamId.refetch();
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
    <main style={{ backgroundColor: "#0C0124", paddingBottom: "20px" }}>
      <div className="min-h-screen flex flex-col justify-items-center items-center">
        <div className="flex max-w-3xl w-full mt-6">
        <div className="grow">
          <Image src="/Logo.png" alt="Logo" width={200} height={80} />
        </div>
        <div>
          <ConnectButton />
        </div>
        </div>
        <div className="card-bordered rounded-xl bg-gray-800 shadow-custom-purple p-3 w-6/12 mt-6">
          <div className="card-body pt-2">
            <h3 className="card-title text-2xl mb-3 text-white">Create stream</h3>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-white">Ens domain</span>
              <label className="input input-bordered flex items-center">
                <input
                  type="text"
                  className="grow"
                  value={ensDomain}
                  onChange={handleEnsDomainChange}
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-white">Amount</span>
              <label className="input input-bordered flex items-center">
                <input
                  type="text"
                  className="grow"
                  placeholder=""
                  value={amount}
                  onChange={handleAmountChange}
                />
              </label>
            </div>

            {/* Inizia la griglia per i select */}
            <div className="grid grid-cols-2 gap-4">
              <select
                className="select select-bordered w-full"
                value={token}
                onChange={handleTokenChange}
              >
                <option disabled value="">
                  Token
                </option>
                <option value="0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357">
                  DAI
                </option>
              </select>
              <select
                className="select select-bordered w-full"
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
                className="select select-bordered w-full"
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
                className="select select-bordered w-full"
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
              <div className="flex gap-2 place-content-end">
              <button
                className="enter-app-btn"
                onClick={approve}
              >
                Approve
              </button>
              <button
                className="enter-app-btn"
                onClick={createStream}
              >
                Create
              </button>
            </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
        <Stream />
        </div>
      </div>
    </main>
  );
}
