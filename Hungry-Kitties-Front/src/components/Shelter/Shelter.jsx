import shelterImage from '../../img/shelter1.webp'
import { NavLink } from 'react-router-dom';
const Shelter = ({imageUrl, description, id}) => {
    if (!imageUrl) {
        imageUrl = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmcSxAZTTCyde2rihnJbnEHZTmy2iygzG9QwFZLbGT1gfK/Balu/1.webp";
    }
    if (!description) {
        description = "Charity collection of KIFT platform"
    }

    console.log("123");
    return (
        <>
            <div className="items__body">
                <img src={imageUrl} alt="shelter" className="items__img" />
                <div className="items__footer">
                    <div className="items__text"> {description} </div>
                    <NavLink to={'/explore/' + id}><div className="items__btn">Details</div></NavLink>
                </div>
            </div>
        </>

    );
}

export default Shelter;