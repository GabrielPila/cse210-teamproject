import "../styles/ReviewPage.css"

const commentData = {
    image: ".png", 
    title: "Rate Your Stay...", 
    howDoYouLikeYourHome: "How do you like your home?", 
    text1: "😡", 
    text2: "🙁", 
    text3: "😐", 
    text4: "😊", 
    text5: "😁",
    sharingYourExperienceWithUs: "Sharing your experience with us....."
}
const ReviewPage = () => {
    const {image, title, howDoYouLikeYourHome, text1, text2, text3, text4, text5, sharingYourExperienceWithUs} = commentData
    return (
    <div className="container-center-horizontal">
        <div className="comment screen">
            <div className="overlap-group1">
                <Frame4/>
                <div className="rectangle-12"></div>
                <image className="image" src={image} alt="image"/>
                <h1 className="title">{title}</h1>
            </div>
            <div className="overlap-group">
                <p className="how-do-you-like-ur-home">{howDoYouLikeYourHome}</p>
                <div className="text-container abeezee-normal-black-64px">
                    <div className="text-1">{text1}</div>
                    <div className="text-2">{text2}</div>
                    <div className="text-3">{text3}</div>
                    <div className="text-4">{text4}</div>
                    <div className="text-5">{text5}</div>
                </div>
            </div>
            <div className="overlap-group-2">
                <p className="sharing-your-experience-with-us">
                    {sharingYourExperienceWithUs}
                </p>
            </div>
        </div>
    </div>
    )
}

function Frame4(){
    return (
        <div className="frame-4">
            <Frame1/>
            <div className="frame-2">
                <div className="place">Home</div>
            </div>
            <Frame3 />
        </div>
    )
}

function Frame1(){
    return (
        <div className="frame-1">
            <img className="star-1" src="star-1.svg" alt="star 1"/>
            <div>
                210 Team 4
            </div>
        </div>
    )
}

function Frame3(){
    return (
        <div className="frame-3">
            <img className="line-1" src="line-1.svg" alt="line 1"/>
            <img className="line-2" src="line-2.svg" alt="line 2"/>
        </div>
    )
}

export default ReviewPage