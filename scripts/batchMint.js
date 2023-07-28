// Import required libraries
const { ethers } = require("hardhat");
require("dotenv").config();

// Function to batch mint tokens
async function batchMintTokens(privateKey, contractAddress, numTokens) {
  try {
    // Create a provider using the network URL
    const networkAddress = "https://ethereum-goerli.publicnode.com";
    const provider = new ethers.providers.JsonRpcProvider(networkAddress);

    // Create a signer from the private key and provider
    const signer = new ethers.Wallet(privateKey, provider);

    // Get the contract factory and attach it to the signer
    const IndianNFT = await ethers.getContractFactory("Wayfarer", signer);
    const contract = await IndianNFT.attach(contractAddress);

    // Call the mint function on the contract to mint 'numTokens' tokens
    await contract.mint(numTokens);

    // Log a message to the console to indicate that the tokens have been minted
    console.log(`${numTokens} tokens minted successfully.`);
  } catch (error) {
    console.error("Error minting tokens:", error);
    process.exit(1);
  }
}

async function main() {
  // Get private key from env
  const privateKey = process.env.PRIVATE_KEY;

  // The address of the deployed contract
  const contractAddress = "0x0b79BD281eC4Ac1BA224Ff0A6C336A863063BDc8";

  // Batch mint 5 tokens
  await batchMintTokens(privateKey, contractAddress, 5);

  // You can batch mint more tokens or perform other actions here if needed.
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
