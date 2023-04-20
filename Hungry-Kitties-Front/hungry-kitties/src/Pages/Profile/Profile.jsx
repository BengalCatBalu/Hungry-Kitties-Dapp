
import './style.css'
import avatar from  '../../img/avatar.webp'


const Profile = () => {



    return ( 
        <>
        <div className="profile">
        <div className="profile__container">
            <div className="profile__card card__profile">
                <div className="card__body">
                    <img src={avatar} alt="kittik" className="card__avatar" />
                    <div className="card__wallet-address">0x060700556ab69f9...</div>
                    <div className="card__scan">Scan</div>
                </div>
            </div>
            <div className="profile__charity charity__profile">
                <div className="charity__donated">$150</div>
                <div className="charity__text">You have donated to shelters!
                </div>
                <div className="charity__under-text">Thank you!</div>
                <div className="charity__line"></div>
                <div className="charity__points">272</div>
                <div className="charity__text">Points</div>
                <div className="charity__under-text">Your charity points</div>
                <div className="charity__line"></div>
                <div className="charity__discription">Charity Points are Points that affect your chance of winning a pool</div>
            </div>
            </div>


        </div>
        </>
     );
}
 
export default Profile;
    





