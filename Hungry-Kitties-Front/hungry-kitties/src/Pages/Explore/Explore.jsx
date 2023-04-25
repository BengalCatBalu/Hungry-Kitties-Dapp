import './explore.css'
import React from "react";
import Shelter from '../../components/Shelter/Shelter'


const Explore = () => {
    return ( 
     <>
     <div className="explore__container exlore__container-small">
          <div className="explore__content">
               <h1 className="explore__title">Explore Charity Events On Sui</h1>
               <div className="explore__items items__explore">
                    <Shelter></Shelter>
                    <Shelter></Shelter>
                    <Shelter></Shelter>
                    <Shelter></Shelter>
                    <Shelter></Shelter>
               </div>
          </div>
     </div>
     </>
     );
}
 
export default Explore;