import Navbar from "../components/Navbar"
import Titlebar from "../components/Titlebar";
import "../styles/ReviewPage.css"
import { Container } from '@mui/material';

const commentData = {
    text1: "😡", 
    text2: "🙁", 
    text3: "😐", 
    text4: "😊", 
    text5: "😁",
    sharingYourExperienceWithUs: "Sharing your experience with us....."
}
const ReviewPage = () => {
    const {text1, text2, text3, text4, text5, sharingYourExperienceWithUs} = commentData
    return (
    <div className="container-center-horizontal">
        <Container className="comment screen">
            <Navbar />
            <Titlebar title="Rate Your Stay..."/>
            <div className="section-1">
                <div className="sub-title">How do you like your home?</div>
                <div className="text-container abeezee-normal-black-64px">
                    <div className="review-icon">{text1}</div>
                    <div className="review-icon">{text2}</div>
                    <div className="review-icon">{text3}</div>
                    <div className="review-icon">{text4}</div>
                    <div className="review-icon">{text5}</div>
                </div>
            </div>
            <div className="section-2">
                <p className="sharing-your-experience-with-us">
                    {sharingYourExperienceWithUs}
                </p>
            </div>
        </Container>
    </div>
    )
}

export default ReviewPage