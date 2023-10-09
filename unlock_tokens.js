const Web3 = require("web3");
const bridgeAbi = require("./build/contracts/Bridge.json").abi;

const web3 = new Web3("YOUR_RINKEBY_INFURA_ENDPOINT"); // Replace with your Infura endpoint for Rinkeby
const accounts = web3.eth.getAccounts();

const destinationBridgeAddress = "YOUR_DESTINATION_BRIDGE_ADDRESS_ON_RINKEBY"; // Replace with your actual destination bridge address on Rinkeby

const unlockTokensOnDestination = async () => {
    const bridgeContract = new web3.eth.Contract(bridgeAbi, destinationBridgeAddress);

    // Example: Unlock 100 tokens
    const amountToUnlock = web3.utils.toWei("100", "ether");

    try {
        const result = await bridgeContract.methods.unlockTokens(amountToUnlock).send({ from: accounts[0] });
        console.log("Tokens unlocked successfully. Transaction Hash:", result.transactionHash);
    } catch (error) {
        console.error("Error unlocking tokens:", error);
    }
};

unlockTokensOnDestination();
