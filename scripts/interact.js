const ethers = require("ethers")

const interactingLocally = true

let provider
let signer
let Contract
let contract

if (interactingLocally) {
  provider = new ethers.providers.JsonRpcProvider()
  signer = new ethers.Wallet(LOCAL_PKEY, provider)
  Contract = ()
  contract = ()
} else {
  provider = new ethers.providers.AlchemyProvider()
  signer = new ethers.Wallet(METAMASK_PKEY, provider)
  Contract = ()
  contract = ()
}

/*
const provider = new ethers.providers.AlchemyProvider()
const signer = new ethers.Wallet(METAMASK_PKEY, provider)

const Contract = requıre()
const contract = new ethers.Contract()

const Contract = require()
const contract = new ethers.Contract()
*/

async function main() {
  if (interactingLocally) {
    console.log(">>> calling test locally")
  } else {
    console.log(">>> calling test testnet")
  }

  await contract.test()
}

main()
