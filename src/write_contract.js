const { ethers } = require("ethers");

const INFURA_ID = '555d39229f78491aa53be1f6a061a7e6';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const account1 = '0x28320Aa8ea408B97Df3E4023130c4aD19f9e537b';
const account2 = '0xd1fd3363c68f6eaf987acd5920126cfd16549e50';

const privateKey1 = 'a79208ad707daeff19146fd228036f591a07939cfbce12056ade9bf59edca8ab';
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = '0xa36085F69e2889c224210F603D836748e7dC0088';
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()