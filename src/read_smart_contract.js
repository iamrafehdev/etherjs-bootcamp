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
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();

    console.log(`Reading From: ${address}\n`);
    console.log(`Contract Name: ${contractName}`);
    console.log(`Symbol: ${symbol}`);
    console.log(`Total Supply: ${totalSupply}\n`);

    const balance = await contract.balanceOf('0x6B175474E89094C44Da98b954EedeAC495271d0F');
    console.log(`Balance Returned: ${balance}`);
    console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);
}

main()