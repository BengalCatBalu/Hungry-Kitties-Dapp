import React from 'react';
import { useCallback } from 'react'
import { ethos } from 'ethos-connect'
import axios from 'axios';

function NotRegister() {
    const { wallet } = ethos.useWallet()

    const register = useCallback(async () => {
        if (!wallet?.currentAccount) return
        try {
            const result = await wallet?.signMessage({
                message: 'Register To KIFT!',
            })
            if (result) {
                const postData = { address: wallet?.address };
                axios.post('http://localhost:4000/api/users', postData)
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
                window.location.reload();
            }
        } catch (e) {
            console.log('Error signing message', e)
        }
    }, [wallet])

    return (
        <div>
            Mint our Register NFT
            <div>
                <button onClick={register}>
                    Mint Me
                </button>
            </div>
        </div>
    );
}

export default NotRegister;