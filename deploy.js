const HDWalletProvider = require ('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider('cotton rice umbrella below fire lock above such virus gold grain nature',
 'https://infura.io/project/948eea8cff0e4225a394345353afd3a9'
);
const web3 = new Web3(provider);
const deploy =  async () => {
const accounts = await web3.eth.getAccounts();
console.log('attempting to deploy from account', accounts[0])
const result = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({data:bytecode})
   .send({ gas: '1000000', from: accounts[0]}); 
console.log('contract deployed to', result.options.address);
}; 
deploy();