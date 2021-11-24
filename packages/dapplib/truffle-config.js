require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food fire cost toss cluster hen light army genius'; 
let testAccounts = [
"0x44db1755457056e0b7ee9336d08d8b58693e038d4d888e2ba0ee4a52ea0ff419",
"0x40ab93434ae910577d37e6f420091a57f63bcae9906f5dc2b9061d24bee7c658",
"0x6b050dd2a92de3e68ef877543271a5e1ca523b9577816a81d5f63d0723554fee",
"0x7e9a7da2fcb8e09882999a905be802b7266857b606c14f1c18fc5d9bf02b5d59",
"0xc5ef81a8c5436adc775d3e4bc82166a137887124d5fb3f7974c8811a5df76b79",
"0x9d6a14fae42e0d9000e27967604b9b5ac049f41f0a2afcec92da947a9581261b",
"0xf44ee9d73ad21f31bafa0b1d0a0bd5cecafd9d5ca3c9545951fbc5d9f28c404c",
"0x34c58c791fe76fef2c5e9a2cfd909a52b44c3fbd8551734ae0e7664ea4134f71",
"0x7493ef50030cf12a94aed926b76515b03d48362db62580c046653f606a3d442b",
"0x46fa1826b5a8e600774c3f82f3a89ed1e941b7d507027c41b770e26a993faf90"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

