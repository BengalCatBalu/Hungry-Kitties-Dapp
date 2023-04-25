import './shelterpage.css'
import shelterImage from '../../img/shelter1.webp'
import getCollectionInfo from '../../utility_functions/server/collectionApiRequest';
import React, { useState, useEffect } from 'react'


const ShelterPage = () => {
    const [shelter, setShelter] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const { id } = useParams();
                const data = await getCollectionInfo(id);
                if (data == null) {
                    setNotRegister(true);
                    return;
                }
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);


    return ( 
        <>
        <div className="shelter">
            <div className="shelter__container shelter__container-small" >
                <div className="shelter__content">
                    <div className="shelter__mint mint__shelter">
                        <div className="mint__body">
                            <img src={shelterImage} alt="shelter" className="mint__image" />
                            <div className="mint__footer">
                            <div className="mint__text shelter__text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapiassa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienassa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienassa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienen.</div>
                            <div className="mint__donate">
                                <input min='0.1' step='0.1' name='sui' id='sui' type="number" placeholder='How much would you like to donate to the shelter' className="mint__input" />
                                <label htmlFor="sui" className="mint__sui">SUI</label>
                            </div>
                            <div className="mint__btn shelter__btn">Mint</div>
                            </div>
                        </div>
                    </div>
                    <div className="shelter__discription discription__shelter">
                        <img src={shelterImage} alt="shelter" className="discription__img" />
                        <div className="discription__footer">
                        <div className="discription__text shelter__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sr adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula conseliquam in hendrerit urna. Per adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula coin hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula conseliquam in hendrerit urna. Per adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula coin hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula conseliquam in hendrerit urna. Per adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula coin hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula conseliquam in hendrerit urna. Per adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula coin hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula conseliquam in hendrerit urna. Per adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula conseliquam in hendrerit urna. Per adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula conseliquam in hendrerit urna. Peit amet sapien fringilla, mattis ligula conseliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula conse</div>
                        <div className="discription__btn shelter__btn">Website</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ShelterPage;