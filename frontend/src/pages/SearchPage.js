import "../styles/SearchPage.css";
import Navbar from "../components/Navbar";
import Dropdown_Price from "../components/Dropdown_Price.js";
import Dropdown_MoveIn from "../components/Dropdown_MoveIn.js";
import search_page from "../pics/search-page.png";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Search() {
  const navigate = useNavigate();

  const navigateToList = () => {
    navigate('/list');
  };

  const [selected, setSelected] = useState("");
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <Navbar />
          <h3 className="Find-home-with-san-diego-safari">Find Your Home with San Diego Housing Safari</h3>
          <div className="search-forms">
            <input
              type="location"
              className="location-placeholder"
              placeholder="search by location"
            />
            <Dropdown_Price selected={selected} setSelected={setSelected} />
            <Dropdown_MoveIn selected={selected} setSelected={setSelected} />
            <button type="Search" className="search-button" onClick={navigateToList}>
                <a >Search</a>
            </button>
          </div>
          <div className="search_pic">
            <img src={search_page} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;