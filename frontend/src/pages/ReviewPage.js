import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Button, Container } from '@mui/material';
import Navbar from "../components/Navbar"
import Titlebar from "../components/Titlebar";
import "../styles/ReviewPage.css"


const commentData = {
    text1: "😡", 
    text2: "🙁", 
    text3: "😐", 
    text4: "😊", 
    text5: "😁"
}
const ReviewPage = () => {
    const { state } = useLocation();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const {text1, text2, text3, text4, text5} = commentData

    const onSubmit = (e) => {
        if (rating === 0){
            alert("Please choose a rating!")
        } else if(comment.trim() === ""){
            alert("Please leave a comment!")
        } else{
            alert("Submit comment")
            const allButtons = document.getElementsByClassName("review-icon");
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].style.backgroundColor =  "#F1EDE3";
            }
            setComment("");
            setRating(0);
        }
    }
    const onIconClick = (e) => {
        const value = e.target.dataset.value
        setRating(value);
        console.log(state.listingId)
    }

    useEffect(() => {
        // Update the document title using the browser API
        if (rating !== 0) {
            const allButtons = document.getElementsByClassName("review-icon");
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].style.backgroundColor =  "#F1EDE3";
            }
            const name = `button-${rating}` 
            const button = document.getElementsByName(name)[0]
            button.style.backgroundColor = "#d5c7a4";
        }
        
    }, [rating]);

    return (
        <Container className="review-page" maxWidth={false}>
            <Navbar />
            <Titlebar title="Rate Your Stay..."/>
            <div className="section-1">
                <div className="sub-title">How do you like your home?</div>
                <div className="text-container abeezee-normal-black-64px">
                    <div className="review-icon" name="button-1" data-value="1" onClick={onIconClick}>{text1}</div>
                    <div className="review-icon" name="button-2" data-value="2" onClick={onIconClick}>{text2}</div>
                    <div className="review-icon" name="button-3" data-value="3" onClick={onIconClick}>{text3}</div>
                    <div className="review-icon" name="button-4" data-value="4" onClick={onIconClick}>{text4}</div>
                    <div className="review-icon" name="button-5" data-value="5" onClick={onIconClick}>{text5}</div>
                </div>
            </div>
            <div className="section-2">   
                <div className="review-page-textarea-div">
                    <textarea
                        className="review-page-textarea"
                        value={comment}
                        placeholder="Share your experience with us......"
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                    />
                </div>              
                <div className="reviews-page-button-div">
                    <Button className="reviews-page-button" variant="contained" onClick={onSubmit}>Submit</Button>
                </div>
            </div>
        </Container>
    )
}

export default ReviewPage