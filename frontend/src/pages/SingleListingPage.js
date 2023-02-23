import { Container, Grid} from '@mui/material';
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import Titlebar from "../components/Titlebar";
import LandlordInfo from '../components/LandlordInfo';
import "../styles/SingleListingPage.css"
import ListingMain from '../components/ListingMain';
import Reviews from "../components/Reviews"
import SingleListingImageGallery from '../components/SingleListingImageGallery';


const SingleListingPage = () => {
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
    const [avgRating, setAvgRating] = useState(0);
    const [landlordInfo, setLandlordInfo] = useState({
        name: "",
        email: "",
        number: "",
        videoAvailability: false,
        averageResponseTime: 1
    })
    const [mainInfo, setMainInfo] = useState({
        price: 1000,
        bedroom: 1,
        bathroom: 1,
        date: "June 1st 2023",
        features: ["oven", "bathroom", "kitchen"]
    })
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
        const newLandlordInfo = {
            name: "Will",
            email: "adfsdf@ucsd.edu",
            number: "(123)456-7890",
            videoAvailability: false,
            averageResponseTime: 1
        }
        
        let total = 0
        for (let review of newReviews){    
            total += review.rating
        }
        const avg = total / newReviews.length;
        setAvgRating(avg)
        setReviews(newReviews)
        setLandlordInfo(newLandlordInfo)
    }, [])
    const [title, setTitle] = useState("Student Apartment 1....")
    return (
        <Container className="single-listing-page" maxWidth={false}>
            <Navbar />
            <Titlebar title={title}/>
            <Grid container spacing={1} className="grid-container">
                <Grid item xs={4} className="grid-item-1">
                    <SingleListingImageGallery images={images}/>
                </Grid>
                <Grid item xs={8} className="grid-item-2">
                    <ListingMain {...mainInfo}/>
                </Grid>
                <Grid item xs={4} className="grid-item-3">
                    <LandlordInfo {...landlordInfo}/>
                </Grid>
                <Grid item xs={8} className="grid-item-4">
                    <Reviews reviews={reviews} avgRating={avgRating}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SingleListingPage