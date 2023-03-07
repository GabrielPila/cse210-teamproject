import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import withAuth from "../hooks/withAuth";
import search_page from "../pics/search-page.png";
import "../styles/SearchPage.css";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Search() {
  // add token to the reqs
  axios.defaults.headers.common[
    "Authorization"
  ] = `Token ${localStorage.getItem("token")}`;

  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const [formData, setFormData] = useState({
    location: "",
    price: null,
    moveInDate: "",
  });
  const [pageSearched, setSearched] = useState(false);
  const { location, price, moveInDate } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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

  const onSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token") || ""
    const body = {
      location: location,
      price: parseInt(price),
      move_in_date: Date.parse(moveInDate),
    };

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
        // "Authorization": `Bearer ${token}`
      },
      params: param,
    };

    axios
      .get("http://localhost:8000/listings/", config)
      .then((res) => {
        console.log(res);
        const data = res.data;
        const listings = data.map((listing) => {
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
          };
        });
        setSearched(true);
        navigate("/list", {
          state: {
            listings,
          },
        });
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (localStorage.getItem("token") === "") {
      navigate("/login");
    }
  }, []);

  if (pageSearched) {
    return <Navigate to="/list/" />;
  }

  return (
    <Container className="search-Auth-form-container" maxWidth={false}>
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
                placeholder="type your price"
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

            <div className="col  form-group ">
              <button
                type="Search submit"
                className="search-button"
              >
                <a>Search</a>
              </button>
            </div>
          </form>
        </Grid>

        <Grid item xs={12} className="search-grid-item-4">
          <div>
            <img src={search_page} style={{ width: "100%", height: "280px" }} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default withAuth(Search);
