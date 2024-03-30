"use client";

import { useReadLocalStorage } from "usehooks-ts";
import { Address } from "viem";
import { useAccount, useWriteContract } from "wagmi";

type Stream = {
  streamId: String;
  sender: String;
  receiver: String;
  amount: String;
  token: String;
};

export default function Stream() {
  const stream = useReadLocalStorage<Stream>("sablier-stream");
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount()
  if (!stream?.streamId) return <></>;

  async function withdrawReceiver() {
  
    await writeContractAsync({
        abi: [
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              }
            ],
            "name": "withdrawMax",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
            ],
        address: process.env.NEXT_PUBLIC_RAPIDO_SMART_CONTRACT as Address,
        functionName: "withdrawMax",
        args: [
          stream?.streamId,
          process.env.NEXT_PUBLIC_RAPIDO_SMART_CONTRACT as Address,
        ],
      });
    }

  async function withdrawMax() {
  
    await writeContractAsync({
        abi: [
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "streamId",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              }
            ],
            "name": "withdrawMax",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
            ],
        address: process.env.NEXT_PUBLIC_SABLIER_LOCKUP_LINEAR as Address,
        functionName: "withdrawMax",
        args: [
          stream?.streamId,
          process.env.NEXT_PUBLIC_RAPIDO_SMART_CONTRACT as Address,
        ],
      });
    }

  return (
    <div>
      <h3>Stream</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>StreamId</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Token</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{stream?.streamId}</th>
              <td>{stream?.sender}</td>
              <td>{stream?.receiver}</td>
              <td>{stream?.amount}</td>
              <td>{stream?.token}</td>
              <td><button onClick={withdrawMax}>withdraw</button></td>
              <td><button onClick={withdrawReceiver}>withdraw2</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
