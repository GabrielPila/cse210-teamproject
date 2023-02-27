import "../styles/ListingMain.css";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ListingFeatures = ({name, price, bedroom, bathroom, email, number}) => {

    return (
        <div className="listingMain">
            <div className="listingMain-content">
               <h1>{name} </h1>
               <h3>{bedroom} bedroom {bathroom} bathroom</h3>
               <h2>${price}/ month</h2>
                <p><EmailIcon className="landlord-icon-email"/> :  {email}</p>
                <p><PhoneIcon className="landlord-icon-number"/> :  {number}</p>
            </div>
        </div>
    )
}

export default ListingFeatures;