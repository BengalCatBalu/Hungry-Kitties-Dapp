import { useCallback, useEffect, useState } from 'react'
import { ethos } from 'ethos-connect'
import { NETWORK } from '../Constants';

const Fund = () => {
    const { wallet } = ethos.useWallet();

    const fund = useCallback(async () => {
        if (!wallet) return;
        try {
            await ethos.dripSui({ address: wallet.address, network: NETWORK });
        } catch (e) {
            console.log("Error", e)
        }
    }, [wallet]);


    return (
        <div>
            <button onClick={fund}>
                Faucet
            </button>
        </div>
    )
}

export default Fund;