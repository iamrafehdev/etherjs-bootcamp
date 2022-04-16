const { ethers } = require("ethers");

const INFURA_ID = '555d39229f78491aa53be1f6a061a7e6';
const provider =  new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];


const address = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
const contract = new ethers.Contract(address, ERC20_ABI, provider) 

const main = async () => {
    const contractName = await contract.name();
    console.log(`Contract Name: ${contractName}`);
}

main()