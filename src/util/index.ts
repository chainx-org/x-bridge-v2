import {decodeAddress, encodeAddress} from "@polkadot/keyring";

export default function ChangeChainXAddress(address: string){
   return encodeAddress(decodeAddress(address),44)
}