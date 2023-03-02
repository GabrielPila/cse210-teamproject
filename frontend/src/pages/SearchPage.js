
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { Container, Grid, Select} from '@mui/material';
import Navbar from "../components/Navbar";
import Dropdown_Price from "../components/Dropdown_Price.js";
import Dropdown_MoveIn from "../components/Dropdown_MoveIn.js";
import search_page from "../pics/search-page.png";
import "../styles/SearchPage.css";


function Search() {
  const navigate = useNavigate();
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  
  const search = () => {
    axios
      .get("http://localhost:8000/listings/")
      .then((res) => {
        console.log(res)
        const data = res.data;
        const listings = data.map(listing => {
          return {
            id: listing.id,
            mainInfo: {
              name: listing.title,
              price: listing.current_price_month,
              bedroom: listing.num_bathrooms,
              bathroom: listing.num_bathrooms,
              email: listing.landlord.email,
              number: 123456,
            },
            images: images,
          }
        });
        navigate("/list", {
          state: {
            listings
          }
        });
      }).catch(e => console.log(e));
  }
 
  const [data, setData] = useState({
    location: "",
    price: "",
    date: ""
  })

  const [selected, setSelected] = useState("");

  useEffect(()=> {
    if(localStorage.getItem("token") === "") {
      navigate("/login")
    }
  }, [])
  return (
    <Container className="search-Auth-form-container" maxWidth={false}>
        <Navbar />
        <Grid container spacing={1} className="search-grid-container">
            <Grid item xs={12} className="search-grid-item-1">
              <div className="Find-home-with-san-diego-safari">Find Your Home with San Diego Housing Safari</div>
            </Grid>
            <Grid item xs={10} className="search-grid-item-2">
                <div className="search-forms">
                <input
                  type="location"
                  className="location-placeholder"
                  placeholder="search by location"
                />
                {/* <select>

                </select> */}
                <Dropdown_Price selected={selected} setSelected={setSelected} />
                <Dropdown_MoveIn selected={selected} setSelected={setSelected} />
              </div>
            </Grid>
            <Grid item xs={2} className="search-grid-item-3">
              <button type="Search" className="search-button" onClick={search}>
                  <a >Search</a>
              </button>
            </Grid>
            <Grid item xs={12} className="search-grid-item-4">
                <div>
                 <img src={search_page} style={{ width: "100%", height: "280px"}} />
               </div>
            </Grid>
        </Grid>
    </Container>
  );
}

export default Search;