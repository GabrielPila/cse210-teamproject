import { Container } from '@mui/material';
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import Titlebar from "../components/Titlebar";
import Review from '../components/Review';
import "../styles/ReviewsPage.css"


const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        const newReviews = [
            {   
                id: 1,
                rating: 5,
                date: "2023/05/02",
                comment: "Great House"
            }, 
            {
                id: 2,
                rating: 4,
                date: "2023/01/03",
                comment: "Great House!!!!!"
            }, 
            {
                id:3, 
                rating: 2,
                date: "2023/02/01",
                comment: "Terrible House"
            },
            {   
                id: 4,
                rating: 5,
                date: "2023/05/02",
                comment: "Great House"
            }, 
            {
                id: 5,
                rating: 4,
                date: "2023/01/03",
                comment: "Great House!!!!!"
            }, 
            {
                id:6, 
                rating: 2,
                date: "2023/02/01",
                comment: "Terrible House"
            }, 

        ]
        setReviews(newReviews)
    }, [])
    return (
        <Container className="review-page" maxWidth={false}>
            <Navbar />
            <Titlebar title="Reviews..."/>
            <div className="section-1">
                {reviews?.length !== 0 ? (
                    reviews.map(review => {
                    return <Review key={review.id} {...review} />;
                    })
                ) : (
                    <div>
                    <h1 className="font-title text-center text-black">
                        No Reviews Yet.
                    </h1>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default ReviewsPage