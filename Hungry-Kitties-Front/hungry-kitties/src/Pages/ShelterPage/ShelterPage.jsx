import './shelterpage.css'
import ShelterScan from '../../img/scan-shelter.svg'
import getCollectionInfo from '../../utility_functions/server/collectionApiRequest';
import React, { useState, useEffect, useCallback } from 'react'
import Slider from '../../utils/slider/Slider.jsx'
import { useParams } from "react-router-dom";
import { ethos, TransactionBlock } from 'ethos-connect';
import updateCreated from '../../utility_functions/server/updateCreated';
import { ToastContainer, toast } from 'react-toastify';
import getUserInfo from '../../utility_functions/server/userApiRequest';
import { ADMIN_ADDRESS, CONTRACT_ID, MIST_VALUE, POOL_ADDRESS } from '../../constants';

const ShelterPage = () => {
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
            toast.warning('Please, input value', {
                duration: 1500,
                closeOnClick: false,
                closeButton: true,
                position: 'bottom-center',
              });
            return;
        }
        if (!wallet) {
            toast.warning('Please, connect your wallet', {
                duration: 1500,
                closeOnClick: false,
                closeButton: true,
                position: 'bottom-center',
              });
              return;
        }
        if (await getUserInfo(wallet.address) == null) {
            toast.warning('Please, reqister to KIFT', {
                duration: 1500,
                closeOnClick: false,
                closeButton: true,
                position: 'bottom-center',
              });
              return;
        }
        try {
          const txb = new TransactionBlock();
          const coins = txb.splitCoins(txb.gas, [txb.pure(donatedValue * 9 / 10), txb.pure(donatedValue * 5 / 100), txb.pure(donatedValue * 5 / 100)]);
          txb.transferObjects([coins[0]], txb.pure(shelter.shelter_address));
          txb.transferObjects([coins[1]], txb.pure(ADMIN_ADDRESS));
          txb.transferObjects([coins[2]], txb.pure(POOL_ADDRESS));
          txb.moveCall({
            target: `${CONTRACT_ID}::DonationCollection::buy_nft`,
            arguments: [
              txb.pure(collectionId),
              txb.pure(donatedValue),
              txb.pure(shelter.ipfs_url + (shelter.created + 1) + ".webp"),
            ]
          })
          const response = await wallet.signAndExecuteTransactionBlock({
            transactionBlock: txb,
          })
          updateCreated(shelter.created, id, shelter.raised, donatedValue / MIST_VALUE, wallet?.address)
          toast.success('Succesfuly donated!', {
            duration: 1500,
            closeOnClick: false,
            closeButton: true,
            position: 'bottom-center',
          });
        } catch (error) {
          console.log(error)
          toast.error('Something went wrong!', {
            duration: 1500,
            closeOnClick: false,
            closeButton: true,
            position: 'bottom-center',
          });
        }
    })

    if (shelter) {
        return (
            <div className="shelter">
                <ToastContainer />
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
                                <div className="shelter__label">How much would you like to donate</div>
                                <div className="shelter__input">
                                    <input type="number"  placeholder='SUI' min='0.5' step='0.5' name='sui' id='sui' className="shelter__value" />
                                    <input placeholder='SUI' min='0.5' step='0.5' name='sui' id='sui' type="number" className="shelter__value" onChange={(event) => setDonatedValue(event.target.value * MIST_VALUE)}/>

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