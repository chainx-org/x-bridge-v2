import React, {useEffect, useState} from "react";
import * as definitions from '../interfaces/definitions'
import {ApiPromise, WsProvider} from "@polkadot/api";
import Api from '@polkadot/api/promise';
export default async function useApi() {
    console.log(222)
    const types = Object.values(definitions).reduce((res, { types }): object => ({ ...res, ...types }), {});
    const provider = new WsProvider('wss://xbridge.spiderx.pro/ws')
    // const api = new Api(provider)
    const api = await ApiPromise.create({provider, types});
}