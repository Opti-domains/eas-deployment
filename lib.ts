import { ethers } from "ethers"

let provider, wallet;

export function setupWallet(rpc: string, pk) {
  provider = new ethers.providers.JsonRpcProvider(rpc);
  wallet = new ethers.Wallet(pk, provider);
}

export function getWallet(): ethers.Wallet {
  return wallet
}

export function getProvider(): ethers.providers.JsonRpcProvider {
  return provider
}