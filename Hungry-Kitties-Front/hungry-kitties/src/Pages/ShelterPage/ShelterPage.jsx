import './shelterpage.css'
import getCollectionInfo from '../../utility_functions/server/collectionApiRequest';
import React, { useState, useEffect, useCallback } from 'react'
import Slider from '../../utils/slider/Slider.jsx'
import { useParams } from "react-router-dom";
import { ethos, TransactionBlock } from 'ethos-connect';
import updateCreated from '../../utility_functions/server/updateCreated';

const ShelterPage = () => {
    const contractAddress = "0xd1d3ffb987a975d0504aff976cdb008c44187c54b1eb705fcd154a8174a0c2fb";
    const adminAddress = "0x7be4629ec0dda5a41013bcd9b04b502a1474374d0b3e075ef98d970ca5cb6661";
    const poolAddress = "0xeecd9e5384ffcf63b67793e2496d2f48fbc195c2009a19d7e715a347e335ec6e";
    const MIST_VALUE = 1000000000;
    const {wallet} = ethos.useWallet();
    const [shelter, setShelter] = useState(null);
    const [collectionId, setCollectionId] = useState(null);
    const { id } = useParams();
    const [donatedValue, setDonatedValue] = useState(0);
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
        if (donatedValue == 0) {
            return;
        }
        if (!wallet) return
        try {
          const txb = new TransactionBlock();
          const coins = txb.splitCoins(txb.gas, [txb.pure(donatedValue * 9 / 10), txb.pure(donatedValue * 5 / 100), txb.pure(donatedValue * 5 / 100)]);
          txb.transferObjects([coins[0]], txb.pure(shelter.shelter_address));
          txb.transferObjects([coins[1]], txb.pure(adminAddress));
          txb.transferObjects([coins[2]], txb.pure(poolAddress));
          txb.moveCall({
            target: `${contractAddress}::DonationCollection::buy_nft`,
            arguments: [
              txb.pure(collectionId),
              txb.pure(donatedValue),
              txb.pure(shelter.ipfs_url + (shelter.created + 1) + ".webp"),
            ]
          })
          const response = await wallet.signAndExecuteTransactionBlock({
            transactionBlock: txb,
          })
          updateCreated(shelter.created, id, shelter.raised, donatedValue / MIST_VALUE)
        } catch (error) {
          console.log(error)
        }
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
                            </div>
                        </div>
                        <div className="shelter__footer ">
                            <div className="shelter__donate">
                                <div className="shelter__label">How much would you like to donate to the shelter</div>
                                <div className="shelter__input">
                                    <input min='0.5' step='0.5' name='sui' id='sui' type="number" className="shelter__value" onChange={(event) => setDonatedValue(event.target.value * MIST_VALUE)}/>
                                    <div className="shelter__token">SUI</div>
                                </div>
                                <div className="shelter__mint" onClick={mint}>Mint</div>

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