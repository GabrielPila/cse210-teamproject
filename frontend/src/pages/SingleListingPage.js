import { Container, Grid} from '@mui/material';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar"
import Titlebar from "../components/Titlebar";
import LandlordInfo from '../components/LandlordInfo';
import "../styles/SingleListingPage.css"
import ListingMain from '../components/ListingMain';
import Reviews from "../components/Reviews"
import SingleListingImageGallery from '../components/SingleListingImageGallery';


const SingleListingPage = () => {
    const {state} = useLocation();
    // need title, images, mainListingInfo, landlordInfo, and reviews from the previous page dont need state on this page
    const id = state.id;
    const images = state.images;
    const mainInfo = state.mainInfo;
    const title = `Student Apartment ${id}...`;
    
    // const mainInfo = {
    //     price: 1000,
    //     bedroom: 1,
    //     bathroom: 1,
    //     date: "June 1st 2023",
    //     features: ["oven", "bathroom", "kitchen"]
    // };
    const [avgRating, setAvgRating] = useState(0);
    const reviews = [
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

    const landlordInfo = {
        name: "Will",
        email: "adfsdf@ucsd.edu",
        number: "(123)456-7890",
        videoAvailability: false,
        averageResponseTime: 1
    }
    
    useEffect(()=> { 
        let total = 0
        for (let review of reviews){    
            total += review.rating
        }
        const avg = total / reviews.length;
        setAvgRating(avg)
    }, [reviews])

    return (
        <div className='single-listing-page'>
            <Container className="single-listing-page-container" maxWidth={false}>
                <Navbar />
                <Titlebar title={title}/>
                <Grid container spacing={1} className="grid-container">
                    <Grid item xs={12} md={4} className="grid-item-1">
                        <SingleListingImageGallery images={images}/>
                    </Grid>
                    <Grid item xs={12} md={8} className="grid-item-2">
                        <ListingMain {...mainInfo}/>
                    </Grid>
                    <Grid item xs={12} md={4} className="grid-item-3">
                        <LandlordInfo {...landlordInfo}/>
                    </Grid>
                    <Grid item xs={12} md={8} className="grid-item-4">
                        <Reviews reviews={reviews} avgRating={avgRating}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SingleListingPage