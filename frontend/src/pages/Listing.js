import { Container } from '@mui/material';
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/ListingPage.css"
import Listedpage from '../components/ListedPage';

const ListingPage = () => {
        const [Infos, setInfos] = useState([]);
        useEffect(()=> {
            const newInfos = [
                {   
                    id: 1,
                    mainInfo : {
                        name: "Student Apartment 1",
                        price: 1000,
                        bedroom: 1,
                        bathroom: 1,
                        date: "June 1st 2023",
                        features: ["oven", "bathroom", "kitchen"],
                        email: "adfsdf@ucsd.edu",
                        number: "(123)456-7890",
                    },
                    images: [
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
                      ]
                }, 
                {
                    id: 2,
                    mainInfo : {
                        name: "Student Apartment 2",
                        price: 2000,
                        bedroom: 2,
                        bathroom: 1,
                        date: "June 2nd 2023",
                        features: ["oven", "bathroom", "kitchen"],
                        email: "adfsdf@ucsd.edu",
                        number: "(123)456-7890",
                    },
                    images: [
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
                      ]
                }, 
                {
                    id:3, 
                    mainInfo : {
                        name: "Student Apartment 3",
                        price: 3000,
                        bedroom: 1,
                        bathroom: 1,
                        date: "June 3rd 2023",
                        features: ["oven", "bathroom", "kitchen"],
                        email: "adfsdf@ucsd.edu",
                        number: "(123)456-7890",
                    },
                    images: [
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
                      ]
                },
                {   
                    id: 4,
                    mainInfo : {
                        name: "Student Apartment 4",
                        price: 1000,
                        bedroom: 1,
                        bathroom: 1,
                        date: "June 1st 2023",
                        features: ["oven", "bathroom", "kitchen"],
                        email: "adfsdf@ucsd.edu",
                        number: "(123)456-7890",
                    },
                    images: [
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
                      ]
                }, 
                {
                    id: 5,
                    mainInfo : {
                        name: "Student Apartment 5",
                        price: 1000,
                        bedroom: 1,
                        bathroom: 1,
                        date: "June 1st 2023",
                        features: ["oven", "bathroom", "kitchen"],
                        email: "adfsdf@ucsd.edu",
                        number: "(123)456-7890",
                    },
                    images: [
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
                      ]
                }, 
                {
                    id:6, 
                    mainInfo : {
                        name: "Student Apartment 6",
                        price: 1000,
                        bedroom: 1,
                        bathroom: 1,
                        date: "June 1st 2023",
                        features: ["oven", "bathroom", "kitchen"],
                        email: "adfsdf@ucsd.edu",
                        number: "(123)456-7890",
                    },
                    images: [
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
                      ]
                }, 
    
            ]

            setInfos(newInfos)
        }, [])
        return (
        <Container className="listing-page" maxWidth={false}>
            <Navbar />
            <div className='list-title'>
                <b>Your Next Home...</b>
            </div>
            <div className='list-page'>
                {Infos?.length !== 0 ? (
                    Infos.map(Info => {
                    return <Listedpage key={Info.id} {...Info} />;
                    })
                ) : (
                <></>
                )}
            </div>
        </Container>
        )
}
export default ListingPage

        // class ListingPage extends Component {
                // state = {
        //     houses:[]
        // }

        // componentDidMount(){
        //     let data;
        //     axios
        //     .get("http://localhost:8000/list/")
        //     .then(res => {
        //         // data is what we renturn from listingView.get(): data = {"housename": "regents", "landlord":"nelly"}
        //         data = res.data;
        //         this.setState({
        //             houses:[data]
        //         })

        //     })
        //     .catch(error => {
        //         if (error.response) {
        //           console.log(error.response);
        //           console.log(error.response.status);
        //           console.log(error.response.headers);
        //           }}
        //           )
        // }

        // render(){


        // <div className="Auth-form-container">
        //     <h1>hello from listing</h1>

        //     {this.state.houses.map((house, id) => (
        //        <div>
        //            <h2>{house.housename}</h2>
        //            <h2>{house.landlord}</h2>
        //        </div>
        //     ))}
        // </div>
    // }