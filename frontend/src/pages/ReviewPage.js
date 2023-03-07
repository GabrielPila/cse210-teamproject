import {useState, useEffect, useContext} from "react";
import axios from "axios";
import { useLocation, useNavigate, Navigate} from "react-router-dom";
import { Button, Container } from '@mui/material';
import { AppContext } from "../context/AppContext";
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
    const navigate = useNavigate();
    const {un, token} = useContext(AppContext);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const {text1, text2, text3, text4, text5} = commentData

    const onSubmit = (e) => {
        if (rating === 0){
            alert("Please choose a rating!")
        } else if(comment.trim() === ""){
            alert("Please leave a comment!")
        } else{
            const token = localStorage.getItem("token") || ""
            const body = JSON.stringify({ comment, rating });
            const config = {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
            };

            axios.post(`http://localhost:8000/comments/${state.id}/`, body, config)
            .then(res => {
                if(res.data.message === "Comment added successfully"){
                    setComment("");
                    setRating(0);
                    const allButtons = document.getElementsByClassName("review-icon");
                    for (let i = 0; i < allButtons.length; i++) {
                        allButtons[i].style.backgroundColor =  "#F1EDE3";
                    }
                    navigate(-1)
                };
            })
            .catch(e => {
                console.log(e)
                alert("Something went wrong. Please try again!")
            });
            
            
        }
    }
    const onIconClick = (e) => {
        const value = e.target.dataset.value
        setRating(value);
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
        <>
    {((un !== "" && un !== undefined ) && (token !== "" || token !== undefined)) ? 
    (
        <div className="review-page">
            <Container className="review-page-container" maxWidth={false}>
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
                        <div className="reviews-page-button-div">
                            <Button className="reviews-page-button" variant="contained" onClick={onSubmit}>Submit</Button>
                        </div>
                    </div>              
                    
                </div>
            </Container>
        </div>) : (<Navigate to="/login" replace={true}/>)}
    </>
    )
}

export default ReviewPage