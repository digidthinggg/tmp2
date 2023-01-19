// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "hardhat/console.sol";

contract APIConsumer is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;

  uint256 public volume;
  bytes32 private jobId;
  uint256 private fee;

  constructor() ConfirmedOwner(msg.sender) {
    console.log(">>> contructor");
  }

  function test() public returns (uint32) {
    console.log(">>> test()");
    return 11;
  }
}
