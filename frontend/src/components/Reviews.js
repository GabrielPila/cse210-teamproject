import { Button, Rating } from '@mui/material';
import { Link } from "react-router-dom";
import Review from '../components/Review';
import "../styles/Reviews.css"

const Reviews = ({reviews, avgRating, id}) => {
    return (
        <div className="reviews">
            <div className="reviews-content">
                { avgRating !== 0 ? 
                    (<span className='rating-span'>
                        <Rating className="reviews-rating" value={avgRating} precision={0.1} readOnly /><span><span className='rating-num'>{Math.round(avgRating*10) /10}</span> / 5.0</span>
                    </span>) : 
                    (<Rating className="reviews-rating" value={0} precision={0.1} readOnly />)
                }
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
                    <Link className="reviews-link" to="/reviewPage"  state={{ id: id }}>
                        <Button className="reviews-button" variant="contained">Comment</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Reviews