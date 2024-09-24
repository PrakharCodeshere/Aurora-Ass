"use client";
import { ethers } from "ethers";
import { contractAddress, contractAbi } from "./contractRefs";


export let signer = null;
export let provider;
export let contract = null;


export async function connectWithMetamask() {
  if (window.ethereum == null) {
    console.log("MetaMask not installed; using read-only defaults");
    provider = ethers.getDefaultProvider();
  } else {
    provider = await new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    
    contract = new ethers.Contract(contractAddress, contractAbi, signer);

    return await provider.send("eth_requestAccounts", [0]);
  }
}
connectWithMetamask();


export async function createUser(name, favNumber) {
  if (!contract) {
    console.error("Contract not initialized");
    return;
  }

  try {
    
    const tx = await contract.createUser(name, favNumber);
    await tx.wait(); 
    console.log("User created successfully:", tx);
    return tx;
  } catch (err) {
    console.error("Failed to create user:", err);
    throw err;
  }
}


export async function getUser(id) {
  if (!contract) {
    console.error("Contract not initialized");
    return;
  }

  try {
    const user = await contract.getUser(id,favNumber);
    return user;
  } catch (err) {
    console.error("Failed to get user:", err);
    throw err;
  }
}


export async function deleteUser(id) {
  if (!contract) {
    console.error("Contract not initialized");
    return;
  }

  try {
    const tx = await contract.deleteUser(id);
    await tx.wait();
    console.log("User deleted successfully:", tx);
    return tx;
  } catch (err) {
    console.error("Failed to delete user:", err);
    throw err;
  }
}


export async function updateUser(id, name, favNumber) {
  if (!contract) {
    console.error("Contract not initialized");
    return;
  }

  try {
    const tx = await contract.updateUser(id, name, favNumber);
    await tx.wait();
    console.log("User updated successfully:", tx);
    return tx;
  } catch (err) {
    console.error("Failed to update user:", err);
    throw err;
  }
}


export async function getUserCount() {
  if (!contract) {
    console.error("Contract not initialized");
    return;
  }

  try {
    const count = await contract.getUserCount();
    return count.toNumber ? count.toNumber() : parseInt(count, 10);
  } catch (err) {
    console.error("Failed to get user count:", err);
    throw err;
  }
}