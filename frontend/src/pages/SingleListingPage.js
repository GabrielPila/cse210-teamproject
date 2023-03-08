import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useLocation, Navigate } from 'react-router-dom';
import { Container, Grid} from '@mui/material';
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar"
import Titlebar from "../components/Titlebar";
import LandlordInfo from '../components/LandlordInfo';
import "../styles/SingleListingPage.css"
import ListingMain from '../components/ListingMain';
import Reviews from "../components/Reviews"
import SingleListingImageGallery from '../components/SingleListingImageGallery';

const SingleListingPage = () => {
    // need title, images, mainListingInfo, landlordInfo from the previous page
    // only state is reviews so we can update if users add comment
    const {state} = useLocation();
    const {username, token} = useContext(AppContext);
    //const token = localStorage.getItem("token") || "";
    const id = state?.id || "";
    const images = state?.images || [];
    const mainInfo = state?.mainInfo || {};
    const title = state?.name || "";
    const [avgRating, setAvgRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        const config = {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
          },
        };
        axios.get(`http://localhost:8000/listings/${id}/`, config).then((res) => {
            const dataReviews = res.data.comments_home;
            setReviews(dataReviews)
        })
        .catch( e => {
            console.log(e)
        });
    }, [id, token])

    const landlordInfo = {
        name: mainInfo.landlordName || "Will",
        email: mainInfo.email || "default@gmail.com",
        number: mainInfo.number || "(858)123-4567",
        videoAvailability: Math.random() < 0.5 ? true : false,
        averageResponseTime: Math.floor(Math.random() * 5)
    }
    
    useEffect(()=> { 
        let total = 0
        for (let review of reviews){    
            total += review.rating
        }
        let avg = total / reviews.length;
        if (isNaN(parseFloat(avg))){
            avg = 0
        }
        setAvgRating(avg)
    }, [reviews])

    return (
        <>
        {((username !== "" && username !== undefined ) && (token !== "" || token !== undefined)) ? 
        (<div className='single-listing-page'>
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
                        <Reviews reviews={reviews} avgRating={avgRating} id={id}/>
                    </Grid>
                </Grid>
            </Container>
        </div> ) : (<Navigate to="/login" replace={true}/>)}
        </>
    )
}

export default SingleListingPage;