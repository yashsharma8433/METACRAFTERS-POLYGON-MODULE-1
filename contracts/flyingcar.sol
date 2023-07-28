// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract FlyingCar is ERC721A {
    address public owner;
    uint256 public maxQuantity = 5;
    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmTMK4h8aMFK7sYAMMe5EbNnA74PbmqJNw9uiygLfRTxBM/";
    string public prompt = "car with the wings";

    constructor() ERC721A("flyingcar", "FLYCR") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this function");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner {
        require(totalSupply() + quantity <= maxQuantity, "You can not mint more than 5");
        _mint(msg.sender, quantity);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
