import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Listedpage from "../components/ListedPage";
import "../styles/ListingsPage.css";
import Titlebar from "../components/Titlebar";


const ListingsPage = () => {
  const {state} = useLocation();
  const {listings} = state;
  return (
    <div className='listings-page'>
      <Container className="listings-page-container" maxWidth={false}>
        <Navbar />
        <Titlebar title="Your Next Home..."/>
        <div className="list-page">
          {listings.map((home) => (
            <Listedpage key={home.id} {...home} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ListingsPage;
