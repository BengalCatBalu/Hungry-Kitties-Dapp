
import './profile.css'
import avatar from '../../img/avatar.webp'
import { ethos } from 'ethos-connect'
import React, { useState, useEffect, Component } from 'react'
import getUserInfo from '../../utility_functions/server/userApiRequest'
import NotRegister from './NotRegister/NotRegister'
import AllNfts from './AllNftsOnWallet/AllNfts'
import Nft from '../../components/nftCard/NFT'
import calculatePoints from '../../utility_functions/server/calculatePoints'
import updateNumberOfHungryKitties from '../../utility_functions/server/updateNumberOfHungryKittes'


const Profile = () => {
    const { wallet } = ethos.useWallet();
    const [user, setUser] = useState(null);
    const [notRegister, setNotRegister] = useState(false);
    const [nfts, setNfts] = useState(null);
    const [points, setPoints] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (!wallet) {
                return
            }
            try {
                const data = await getUserInfo(wallet.address);
                if (data == null) {
                    setNotRegister(true);
                    return;
                }
                setUser(data);
                setPoints(calculatePoints(user?.donated, user?.number_of_hungry_kitties, user?.extra_points))
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [wallet?.address]);
    function calculate() {
        console.log(wallet);
        if (!user) {
            return;
        }
        if (!wallet) {
            console.log("no wallet");
            return;
        } else {

            let k = 0;
            console.log(wallet.contents.nfts)
            wallet.contents.nfts.map((nft) => {
                if (nft.name) {
                    if (nft.name.includes("Hungry Kitties")) {
                        k++;
                    }
                }
            });
            updateNumberOfHungryKitties(wallet.address, k);
            setPoints(calculatePoints(user?.donated, user?.number_of_hungry_kitties, user?.extra_points))
        }
    }

    if (!wallet) {
        return <div> No connection </div>
    }

    if (notRegister) {
        return (
            <div className="main">
                <NotRegister />
            </div>
        )
    }
    return (
        <>
            <div className="profile">
                <div className="profile__container profile__container-smaller">
                    <div className="profile__card card__profile">
                        <div className="card__body">
                            <img src={avatar} alt="kittik" className="card__avatar" />
                            <div className="card__wallet-address">{ethos.truncateMiddle(wallet?.address, 6)}</div>
                            <a href={"https://explorer.sui.io/address/" + wallet?.address}><div className="card__scan">Scan</div></a>
                        </div>
                    </div>
                    <div className="profile__charity charity__profile">
                        <div className="charity__donated">${user?.donated}</div>
                        <div className="charity__text">You have donated to shelters!
                        </div>
                        <div className="charity__under-text">Thank you!</div>
                        <div className="charity__line"></div>
                        <div className="charity__under-text">Your charity points</div>
                        <div className="charity__points"> {points ? points: 0}</div>
                        <div className="charity__text">Points</div>
                        <button className='charity__calculate' onClick = {calculate} >Calculate</button>
                        
                        <div className="charity__line"></div>
                        <div className="charity__discription">Charity Points are Points that affect your chance of winning a pool</div>
                    </div>
                </div>
                <div className="profile__nft nft__profile">
                    <div className="nft__container nft__container-smaller">
                        <div className="nft__lebel">Your NFTs</div>
                        <div className="nft__block">
                            {
                                wallet.contents?.nfts.slice(0, 5).map((nft) => {
                                    console.log(nft);
                                    return (<Nft imageUrl={nft.imageUrl} name={nft.name} id={nft.objectId} />);
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Profile;






