import { Container, Grid, useAutocomplete} from '@mui/material';
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import Titlebar from "../components/Titlebar";
import LandlordInfo from '../components/LandlordInfo';
import "../styles/SingleListingPage.css"


const SingleListingPage = () => {
    const [landlordInfo, setLandlordInfo] = useState({
        name: "",
        email: "",
        number: "",
        videoAvailability: false,
        averageResponseTime: 1
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
                    images
                </Grid>
                <Grid item xs={8} className="grid-item-2">
                    main
                </Grid>
                <Grid item xs={4} className="grid-item-3">
                    <LandlordInfo {...landlordInfo}/>
                </Grid>
                <Grid item xs={8} className="grid-item-4">
                    comments
                </Grid>
            </Grid>
        </Container>
    )
}

export default SingleListingPage