import "../styles/ListingMain.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ListingMain = ({price, bedroom, bathroom}) => {
    const date =  "June 1st 2023";
    const features =  ["oven", "bathroom", "kitchen"];
    return (
        <div className="listingMain">
            <div className="listingMain-content">
               <h1>${price}/ month</h1>
               <h3>{bedroom} bedroom {bathroom} bathroom</h3>
               <h3 className="listingMain-calendarMonthIcon-div">
                    <CalendarMonthIcon />:
                    <span className="listingMain-calendarMonthIcon-span">{date}</span>
                </h3>
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