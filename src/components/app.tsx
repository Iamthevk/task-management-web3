import React, { useState } from "react";
import Layout from "./Layout";
import Banner from "./Banner";

import { TaskContractAddress } from "../../config";
import TaskAbi from "../../backend/build/contracts/TodoListsContract.json";
import { ethers } from "ethers";
function App() {
  const [connected, setConnected] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }
      let chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("connected to chain: ", chainId);

      const polygonChainId = "0x13881";
      if (chainId !== polygonChainId) {
        alert("You are not connected to polygon testnet");
        setConnected(false);
        return;
      } else {
        setConnected(true);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("found account", accounts[0]);
      setIsUserLoggedIn(true);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const addTask = async (e: any) => {
    // e.preventDefault();

    let task = {
      taskDescription: input,
      isDone: true,
      listId: Number,
      taskText: String,
    };
    try {
      const { ethereum } = window;
      if (ethereum) {
        await ethereum.enable();
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const todoListsContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        );

        // Create a new transaction object with the addTask method and its parameters
        const transaction = await todoListsContract.addTask(
          task.listId, // Specify the list ID where the task should be added
          task.taskText,
          task.taskDescription,
          task.isDone
        );

        // Send the transaction and open the MetaMask popup
        const response = await signer.sendTransaction(transaction);

        // Wait for the transaction to be mined
        await response.wait();

        console.log("Added new task successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // connectWallet();
  console.log(currentAccount);
  console.log(isUserLoggedIn);
  return (
    <>
      {isUserLoggedIn ? (
        <>
          <Banner handleConnect={connectWallet} isConnected={connected} />
          <Layout />
        </>
      ) : (
        <div className="grid place-items-center mt-10">
          <button
            className=" bg-primary-500 text-white     cursor-pointer p-5 rounded-lg"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      )}
    </>
  );
}

export default App;
