import * as bs58 from "bs58";
import * as nacl from "tweetnacl";
import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";
import {  utils } from "near-api-js";

//Insert mnemonic below
const MNEMONIC = ''

const derivationPath ="m/44'/60'/0'/0/0"

const main = async () =>{
    const seed = await bip39.mnemonicToSeed(MNEMONIC);
    const { key } = derivePath(derivationPath, Buffer.from(seed).toString("hex"));

    const keyPair = nacl.sign.keyPair.fromSeed(key);

   const privateKey =  bs58.encode(Buffer.from(keyPair.secretKey))

    const kp = utils.KeyPair.fromString("ed25519:" + privateKey);
    
    const pubKey = kp.getPublicKey()

    const accountId = Buffer.from(pubKey.data).toString("hex");

    console.log(`Private key: ${privateKey}`)
    console.log(`Account id (Address): ${accountId}`)
}

main()