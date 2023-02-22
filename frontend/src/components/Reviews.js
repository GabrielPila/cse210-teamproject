import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import Review from '../components/Review';
import "../styles/Reviews.css"



const Reviews = ({reviews}) => {
    return (
        <div className="reviews">
            <div className="reviews-content">
                <h3>Reviews stars average rating</h3>
                <h3>Reviews</h3>
                <div className='reviews-div'>
                    {reviews?.length !== 0 ? (
                        reviews.map(review => {
                        return <Review key={review.id} {...review} />;
                        })
                    ) : (
                    <></>
                    )}
                </div>
                <div className='reviews-button-div'>
                    <Link className="reviews-link" to="/reviewPage"  state={{ listingId: "1234" }}>
                        <Button className="reviews-button" variant="contained">Comment</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Reviews