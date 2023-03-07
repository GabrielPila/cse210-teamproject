import { AppProvider } from "../context/AppContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import SearchPage from "./SearchPage";
import Login from "./Login";
import ReviewPage from "./ReviewPage";
import SingleListingPage from "./SingleListingPage";
import Signup from "./Signup";
import ListingsPage from "./ListingsPage";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SearchPage/>}/>  
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>  
          <Route path="/list" element={<ListingsPage/>}/> 
          <Route path="/reviewPage" element={<ReviewPage/>}/> 
          <Route path="/singleListingPage" element={<SingleListingPage/>}/> 
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
