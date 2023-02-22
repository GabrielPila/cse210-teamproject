import "../styles/Review.css"

const Review = ({date, comment}) => {
    return (
        <div className="review-review">
            <span>{comment}</span><span>{date}</span>
        </div>
    )
}

export default Review