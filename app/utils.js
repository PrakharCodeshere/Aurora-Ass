"use client";
import { ethers } from "ethers";
import { contractAddress, contractAbi } from "./contractRefs";

export let signer = null;
export let provider;

export async function connectWithMetamask() {
    console.log("calling connect with metamask");
    if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
        console.log(provider);
    } else {
        provider = await new ethers.BrowserProvider(window.ethereum);
        console.log(provider);
        signer = await provider.getSigner();
        console.log(signer);
        return await provider.send("eth_requestAccounts", [0]);
    }
}
connectWithMetamask();

// Utility to create a new user
export async function createUser() {

}

// Utility to get a user's details
export async function getUser() {

}

// Utility to delete a user
export async function deleteUser() {

}

// Utility to update a user's name and favorite number
export async function updateUser() {

}



// Utility to get the total number of users
export async function getUserCount() {

}
