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
       <div className="shelter">
            <div className="shelter__container shelter__container-smaller">
                <div className="shelter__block">
                    <div className="shelter__content">
                    <div className="shelter__slider">
                        <Slider className="shelter__swiper"></Slider>
                    </div>
                    <div className="shelter__discription">  <a className='shelter__link' href="">Shelter Name</a> dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                    </div> 
                    </div>
                    <div className="shelter__footer ">
                        <div className="shelter__donate">
                        <div className="shelter__label">How much would you like to donate to the shelter</div>
                        <div className="shelter__input">
                        <input min='0.1' step='0.1' name='sui' id='sui' type="number"  className="shelter__value" />
                        <div className="shelter__token">SUI</div>
                        </div>
                        <div className="shelter__mint">Mint</div>
                        
                        </div>
                    </div>
                </div>
            </div>

       </div>       
                           
                          
   
     );
}
 
export default ShelterPage;

 {/* <div className="mint__donate">
                                <input min='0.1' step='0.1' name='sui' id='sui' type="number" placeholder='How much would you like to donate to the shelter' className="mint__input" />
                                <label htmlFor="sui" className="mint__sui">SUI</label>
                            </div> */}