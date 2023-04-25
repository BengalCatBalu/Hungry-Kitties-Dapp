import shelterImage from '../../img/shelter1.webp'

const Shelter = () => {
    return ( 
 <>      
 <div className="items__body">
                    <img src={shelterImage} alt="shelter" className="items__img" />
                    <div className="items__footer">
                        <div className="items__text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</div>
                        <div className="items__btn">Details</div>
                    </div>
                </div>
                </>
               
     );
}
 
export default Shelter;