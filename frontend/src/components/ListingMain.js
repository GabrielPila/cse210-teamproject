import "../styles/ListingMain.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ListingMain = ({price, bedroom, bathroom, date, features}) => {

    return (
        <div className="listingMain">
            <div className="listingMain-content">
               <h1>${price}/ month</h1>
               <h3>{bedroom} bedroom {bathroom} bathroom</h3>
               <h3><CalendarMonthIcon/>:{date}</h3>
               <ul>
               {features.length !== 0 ? (
                    features.map((feature,i) => {
                    return <li key={i} className="list-feature">{feature}</li>;
                    })
                ): (
                    <h1>No Features</h1>
                )}
                </ul>
            </div>
        </div>
    )
}

export default ListingMain;