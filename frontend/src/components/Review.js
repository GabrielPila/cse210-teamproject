import "../styles/Review.css"

const Review = ({rating, date, comment}) => {
    return (
        <div className="review-review">
            <h1>Rating: {rating}/5</h1>
            <h1>Date: {date}</h1>
            <h1>Comment: {comment}</h1>
        </div>
    )
}

export default Review