// Import necessary packages and contracts
const { ethers } = require("hardhat");
const FXRootContractAbi = require('../artifacts/FXRootContractAbi.js');
const FlyingCarAbi = require('../artifacts/contracts/flyingcar.sol/flyingcar.json');
require('dotenv').config();

// Function to transfer ERC721A tokens to the Ethereum FxChain network
async function transferTokensToFxChain() {
  try {
    // Set up connections to network and wallet
    const networkAddress = 'https://ethereum-goerli.publicnode.com';
    const privateKey = process.env.PRIVATE_KEY;
    const provider = new ethers.providers.JsonRpcProvider(networkAddress);

    // Create a wallet instance
    const wallet = new ethers.Wallet(privateKey, provider);

    // Get the signer instance
    const [signer] = await ethers.getSigners();

    // Get ERC721A contract instance
    const FlyingCar = await ethers.getContractFactory("flyingcar");
    const nft = await FlyingCar.attach('0x0b79BD281eC4Ac1BA224Ff0A6C336A863063BDc8');

    // Get FXRoot contract instance
    const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
    const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

    // TokenIds to transfer
    const tokenIds = [0, 1, 2, 3, 4];

    // Approve the NFTs for transfer
    const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
    await approveTx.wait();
    console.log('Approval confirmed');

    // Deposit the NFTs to the FXRoot contract
    for (let i = 0; i < tokenIds.length; i++) {
      const depositTx = await fxRoot.connect(signer).deposit(
        nft.address,
        wallet.address,
        tokenIds[i],
        '0x6566'
      );

      // Wait for the deposit to be confirmed
      await depositTx.wait();
    }

    console.log("Approved and deposited");

    // Test balanceOf
    const balance = await nft.balanceOf(wallet.address);

    // Print the balance of the wallet
    console.log("IndianNFT wallet balance", wallet.address, "is:", balance.toString());
  } catch (error) {
    console.error("Error transferring tokens:", error);
    process.exit(1);
  }
}

// Call the transfer function and handle any errors
transferTokensToFxChain()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
