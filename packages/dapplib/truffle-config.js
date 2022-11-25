require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name rifle magnet concert hope praise army gesture'; 
let testAccounts = [
"0x256f1a34407a5483f7d7c0923f9d5dab3828f15ddaf291153c1771bbb05fc0e2",
"0x87d6eec7eb62734be59b9bceb2294586dd4a2e8c3a0b0e3f4ee0758f2096640e",
"0xf12096a82d3e39d82cc55f2143a19c43e472d86ae711c9a7fc8ce8d7060a3fe5",
"0x59a2ebada700ad1d237d8b2f265020b4849f4228950731c6bb7f7e0fb8df193f",
"0xb6c8de7675a52e424ff3446f57091957a27a7c2cde66bb6626ae553d94d6a84f",
"0x76a2c8b30c26996458ff772caf44f449b62d238ee9392554a502cbc3d2f2246c",
"0xccc8d729b31d05f5520a9af84c81d75878ce4fb6455f297f6486ddb53b9b5d33",
"0xa6c198054ddb15fa4f691b7b48cc2c5e1402361c7e07acd1275485194aaa64c3",
"0xf68bcb34c47ff729402c096d39da8fabeabb6968b2ac2173b28d6d958c5f4f4c",
"0x625a742a6e730d951a81be6b3db2f1499eed321c74e59fe5f9493511aaa04267"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

