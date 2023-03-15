import { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Alert, Container, Grid } from "@mui/material";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import search_page from "../pics/search-page.png";
import "../styles/SearchPage.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";

function SearchPage() {
  const navigate = useNavigate();
  const {username, token} = useContext(AppContext);
  console.log(username, token)

  const [startDate, setStartDate] = useState(new Date());

  const [formData, setFormData] = useState({
    location: "",
    price: null,
    moveInDate: "",
  });
  
  const { location, price} = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault();
    const priceInt = parseInt(price);
    let param = {};
    if (location !== "") {
      param["location"] = location;
    }
    if (price !== null) {
      param["price"] = priceInt;
    }
    if (startDate !== null) {
      param["move_in_date"] = startDate.toDateString(); // 'Tue Feb 28 2023'
    }

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      params: param,
    };
    
    console.log(config)

    axios
      .get("http://localhost:8000/listings/", config)
      .then((res) => {
        console.log(res);
        const data = res.data;
        console.log(data[0])
        if (data.length === 1 && data[0].message){
          alert(data[0].message)
        }else{
          const images = data.map((listing, i) => {
            return {
              original: listing.photos[i]
            }
          })
          const listings = data.map((listing) => {
            return {
              id: listing.id,
              mainInfo: {
                name: listing.title,
                price: listing.current_price_month,
                bedroom: listing.num_bedrooms,
                bathroom: listing.num_bathrooms,
                landlordName: listing.landlord.username,
                email: listing.landlord.email,
                number: 123456,
              },
              images: images,
            };
          });
          navigate("/list", {
            state: {
              listings,
            },
          });
      }
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
    {((username !== "" && username !== undefined ) && (token !== "" || token !== undefined)) ? 
    (<Container className="search-Auth-form-container" maxWidth={false}>
      <Navbar />
      <Grid container spacing={1} className="search-grid-container">
        <Grid item xs={12} className="search-grid-item-1">
          <div className="Find-home-with-san-diego-safari">
            Find Your Home with San Diego Housing Safari
          </div>
        </Grid>
        <Grid item xs={14} className="search-grid-item-2">
          <form className="search-forms" onSubmit={(e) => onSubmit(e)}>
            <div className="col  form-group ">
              <input
                name="location"
                type="location"
                onChange={(e) => onChange(e)}
                value={location}
                className="location-placeholder"
                placeholder="search by location"
              />
            </div>
            <div className="col  form-group ">
              <input
                name="price"
                type="price"
                value={price}
                onChange={(e) => onChange(e)}
                className="price-placeholder"
                placeholder="maximum price"

              />
            </div>

            <div className="col  form-group ">
              <div className="pickdate-form">
                <p>select your move in date</p>

                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>

            <div className="col form-group ">
              <button
                type="Search submit"
                className="search-button"
              >
                Search
              </button>
            </div>
          </form>
        </Grid>

        <Grid item xs={12} className="search-grid-item-4">
          <div>
            <img src={search_page} alt="search-images" style={{ width: "100%", height: "280px" }} />
          </div>
        </Grid>
      </Grid>
    </Container> ) : (<Navigate to="/login" replace={true}/>)}
    </>
  );
}

export default SearchPage;
