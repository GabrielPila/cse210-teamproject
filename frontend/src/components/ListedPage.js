import { Link } from "react-router-dom";
import { Grid, Button} from '@mui/material';
import ListingFeatures from '../components/Listing_features';
import SingleListingImageGallery from '../components/SingleListingImageGallery';
import "../styles/ListedPage.css";

const Listedpage = ({id, images, mainInfo}) => {
    return (
        <Grid container spacing={1} className="list-grid-container">
            <Grid item xs={4} className="list-grid-item-1">
                <SingleListingImageGallery images={images}/>
            </Grid>
            <Grid item xs={8} className="list-grid-item-2">
                <ListingFeatures {...mainInfo}/>
            </Grid>
            <div className='list-more-info'>
                <Link className="reviews-link" to="/SingleListingPage"  state={{ id, images, mainInfo}}>
                    <Button className="reviews-button" variant="contained">See More Info</Button>
                </Link>
            </div>
        </Grid>
    )
}

export default Listedpage