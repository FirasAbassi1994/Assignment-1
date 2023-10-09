const Web3 = require("web3");
const bridgeAbi = require("./build/contracts/Bridge.json").abi;

const web3 = new Web3("http://localhost:8545"); // Connect to Ganache
const accounts = web3.eth.getAccounts();

const sourceBridgeAddress = "YOUR_SOURCE_BRIDGE_ADDRESS_ON_GANACHE"; // Replace with your actual source bridge address on Ganache

const lockTokensOnSource = async () => {
    const bridgeContract = new web3.eth.Contract(bridgeAbi, sourceBridgeAddress);

    // Example: Lock 100 tokens
    const amountToLock = web3.utils.toWei("100", "ether");

    try {
        const result = await bridgeContract.methods.lockTokens(amountToLock).send({ from: accounts[0] });
        console.log("Tokens locked successfully. Transaction Hash:", result.transactionHash);
    } catch (error) {
        console.error("Error locking tokens:", error);
    }
};

lockTokensOnSource();
