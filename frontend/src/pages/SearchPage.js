import "../styles/SearchPage.css";
import Navbar from "../components/Navbar";
import Dropdown_Price from "../components/Dropdown_Price.js";
import Dropdown_MoveIn from "../components/Dropdown_MoveIn.js";
import search_page from "../pics/search-page.png";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Container, Grid} from '@mui/material';

function Search() {
  const navigate = useNavigate();

  const navigateToList = () => {
    navigate('/list');
  };

  const [selected, setSelected] = useState("");
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
                <Dropdown_Price selected={selected} setSelected={setSelected} />
                <Dropdown_MoveIn selected={selected} setSelected={setSelected} />
              </div>
            </Grid>
            <Grid item xs={2} className="search-grid-item-3">
              <button type="Search" className="search-button" onClick={navigateToList}>
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


    // <div className="search-Auth-form-container">
    //   <form className="search-Auth-form">
    //     <div className="search-Auth-form-content">
    //       <Navbar />
    //       <h3 className="Find-home-with-san-diego-safari">Find Your Home with San Diego Housing Safari</h3>
    //       <div className="search-forms">
    //         <input
    //           type="location"
    //           className="location-placeholder"
    //           placeholder="search by location"
    //         />
    //         <Dropdown_Price selected={selected} setSelected={setSelected} />
    //         <Dropdown_MoveIn selected={selected} setSelected={setSelected} />
    //         <button type="Search" className="search-button" onClick={navigateToList}>
    //             <a >Search</a>
    //         </button>
    //       </div>
    //       <div className="search_pic">
    //         <img src={search_page} />
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
}

export default Search;