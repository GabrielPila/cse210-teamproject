import {useContext} from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";
import Listedpage from "../components/ListedPage";
import "../styles/ListingsPage.css";



const ListingsPage = () => {
  const {state} = useLocation();
  const {un, token} = useContext(AppContext);
  const listings = state?.listings || [];
  return (
    <>
    {((un !== "" && un !== undefined ) && (token !== "" || token !== undefined)) ? 
    (<div className='listings-page'>
      <Container className="listings-page-container" maxWidth={false}>
        <Navbar />
        <Titlebar title="Your Next Home..."/>
        <div className="list-page">
          {listings.map((home) => (
            <Listedpage key={home.id} {...home} />
          ))}
        </div>
      </Container> 
      </div>) : (<Navigate to="/login" replace={true}/>)}
    </>
    
  );
}

export default ListingsPage;
