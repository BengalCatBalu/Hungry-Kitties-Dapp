import { useCallback, useEffect, useState } from 'react'
import { ethos } from 'ethos-connect'

const Mint = () => {
    const { wallet } = ethos.useWallet();

    const mint = useCallback(async () => {
        if (!wallet) return;
    
        try {
          const signableTransaction = {
            kind: "moveCall",
            data: {
              packageObjectId: "0x0000000000000000000000000000000000000002",
              module: "devnet_nft",
              function: "mint",
              typeArguments: [],
              arguments: [
                "Ethos Example NFT",
                "A sample NFT from Ethos Wallet.",
                "https://ethoswallet.xyz/assets/images/ethos-email-logo.png",
              ],
              gasBudget: 1000,
            },
          };
    
          const response = await wallet.signAndExecuteTransaction(signableTransaction);
        } catch (error) {
          console.log(error);
        }
    }, [wallet]);

    return (
        <div>
            <button onClick={mint}>
                Mint an NFT
            </button>
        </div>
    )
}

export default Mint;