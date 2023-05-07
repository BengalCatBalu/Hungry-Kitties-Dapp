import './shelterpage.css'
import ShelterScan from '../../img/scan-shelter.svg'
import getCollectionInfo from '../../utility_functions/server/collectionApiRequest';
import React, { useState, useEffect, useCallback } from 'react'
import Slider from '../../utils/slider/Slider.jsx'
import { useParams } from "react-router-dom";

import { ethos } from 'ethos-connect';

const ShelterPage = () => {
    const {wallet} = ethos.useWallet();
    const [shelter, setShelter] = useState(null);
    const [collectionId, setCollectionId] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getCollectionInfo(id);
                if (data == null) {
                    return;
                }
                setShelter(data);
                setCollectionId(data.collection_object_id);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const mint = useCallback(async () => {    
    
        if (!wallet) return
        const tokens = wallet.contents.tokens
        console.log(tokens["0x2::sui::SUI"]["coins"][0])
        /*
        try {
          const transactionBlock = new TransactionBlock();
          transactionBlock.moveCall({
            target: `${contractAddress}::DonationColection::buy_nft`,
            arguments: [
              mintTransactionBlock.pure(collectionId),
              mintTransactionBlock.pure(),
              mintTransactionBlock.pure("https://ethoswallet.xyz/assets/images/ethos-email-logo.png")
            ]
          })
    
          const response = await wallet.signAndExecuteTransactionBlock({
            transactionBlock,
            options: {
              showInput: true,
              showEffects: true,
              showEvents: true,
              showBalanceChanges: true,
              showObjectChanges: true,
            }
          });
    
          console.log("Transaction Response", response)
        } catch (error) {
          console.log(error)
        }
        */
    })

    if (shelter) {
        return (
            <div className="shelter">
                <div className="shelter__container shelter__container-smaller">
                    <div className="shelter__block">
                        <div className="shelter__content">
                            <div className="shelter__slider">
                                <Slider image1 = {shelter.additional_images[0]} 
                                        image2 = {shelter.additional_images[1]}
                                        image3 = {shelter.additional_images[2]}
                                        image4 = {shelter.additional_images[3]}
                                        image5 = {shelter.additional_images[4]}
                                className="shelter__swiper"></Slider>
                            </div>
                            <div className="shelter__discription">
                                <div className="shelter__text">  <a className='shelter__link' href="">{shelter.name}</a> {shelter.description}
                                </div>
                               <img src={ShelterScan} alt="" className="shelter__scan" />
                            </div>
                        </div>
                        <div className="shelter__footer ">
                            <div className="shelter__donate">
                                <div className="shelter__label">How much would you like to donate to the shelter</div>
                                <div className="shelter__input">
                                    <input type="number"  placeholder='SUI' min='0.5' step='0.5' name='sui' id='sui' className="shelter__value" />
                                </div>
                                <div className="shelter__mint" onClick={mint}>Mint</div>
                                <div className="shelter__minted">12/50 minted</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    } else {
        return <div> Loading...</div>
    }
}

export default ShelterPage;