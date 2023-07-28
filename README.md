# METACRAFTERS-POLYGON-MODULE-1 
## (Building with Polygon Bridge - NFT Project)

Welcome to our **NFT** project! We are excited to move our collection to the **Polygon** network to increase demand and save on gas costs. In this project, we will deploy an **ERC721** collection on the **Ethereum blockchain**, map it to the Polygon network, and transfer assets over using the Polygon Bridge. Additionally, we will use image generation tools like DALL-E 2 or Midjourney to create unique images for our NFTs.

## PROJECT OVERVIEW

Our project is structured as follows:
### contracts/FlyingCar.sol ###
This Solidity smart contract represents our ERC721 NFT collection. It includes the implementation for minting NFTs, setting the base URI for metadata, and a function to return the prompt used for image generation.

## How to Run the Project
To run our project locally from GitHub, follow these steps:
## Prerequisites
**1. Make sure you have Node.js and npm (Node Package Manager) installed on your machine.**
  # Step 1: Clone the Repository
## Clone our GitHub repository to your local machine using the following command:
`git clone https://github.com/yashsharma8433/METACRAFTERS-POLYGON-MODULE-1.git`
   # Step 2: Install Dependencies
   Navigate to the project directory and install the required dependencies:

   `cd YourRepository`

  
   `npm install`
# Step 3: Configure Environment Variables
Create a .env file in the root of the project and set the following environment variables:

`PRIVATE_KEY=YOUR_PRIVATE_KEY`

# Step 4: Deploy and Interact with the Smart Contract
Deploy the smart contract to the Goerli Ethereum Testnet using Hardhat:

`npx hardhat run scripts/deploy.js --network goerli`

This command will deploy the FlyingCar contract to the Goerli Testnet. Once deployed, it will output the contract address, which you can use to interact with the contract.

# Step 5: Generate and Mint NFTs
Now, generate 5 NFTs using DALL-E 2 or Midjourney. Store the images on IPFS using pinata.cloud and obtain their respective IPFS URLs.


## Approve and Deposit NFTs 
Run the following commands to approve and deposit the minted NFTs from Ethereum using the FxPortal Bridge:

`npx hardhat run scripts/approveDeposit.js --network goerli`

# Enjoy Your NFT Collection on Polygon!
Congratulations! You have successfully moved your NFT collection . You can now enjoy your NFTs .

# Happy NFT-ing! 🚀🎨🌈



## LICENSE
This project is licensed under the [MIT License](LICENSE).
