import './explore.css'
import Shelter from '../../components/Shelter/Shelter'
import React, { useState, useEffect } from 'react'
import getAllCollectionsInfo from '../../utility_functions/server/allCollectionsApiRequest';

const Explore = () => {
     const [collections, setCollections] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(true);

     useEffect(() => {
          async function fetchData() {
               try {
                    const data = await getAllCollectionsInfo();
                    setCollections(data);
                    setLoading(false);
                    setError(false);
               } catch (error) {
                    console.log(error);
                    setError(error);
               }
          }
          fetchData();
      }, []);

     return (
          <>
               <div className="explore__container exlore__container-smaller">
                    <div className="explore__content">
                         <h1 className="explore__title">Explore Charity Events On Sui</h1>
                         <div className="explore__items items__explore">
                              {collections ? collections.map((collection) => {
                                  //console.log(collection.image);
                                  return (
                                  <Shelter imageUrl={collection.image} description={collection.description} id = {collection._id}/>)
                              }) : <div> Loading... </div>}
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Explore;