import './explore.css'
import React from "react";
import Shelter from '../../components/Shelter/Shelter'
import React, { useState } from 'react'

const Explore = () => {
     const [collections, setCollections] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
          async function fetchData() {
               try {
                    const data = await getAllCollections();
                    setCollections(data);
                    setLoading(false);
               } catch (error) {
                    console.log(error);
                    setError(error);
               }
          }
          fetchData();
      }, []);

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
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Explore;