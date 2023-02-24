import axios from 'axios'
import { Component } from "react";

class ListingPage extends Component {
    state = {
        houses:[]
    }

    componentDidMount(){
        let data;
        axios
        .get("http://localhost:8000/list/")
        .then(res => {
            // data is what we renturn from listingView.get(): data = {"housename": "regents", "landlord":"nelly"}
            data = res.data;
            this.setState({
                houses:[data]
            })

        })
        .catch(error => {
            if (error.response) {
              console.log(error.response);
              console.log(error.response.status);
              console.log(error.response.headers);
              }}
              )
    }

    render(){
        return (
        <div className="Auth-form-container">
            <h1>hello from listing</h1>

            {this.state.houses.map((house, id) => (
               <div>
                   <h2>{house.housename}</h2>
                   <h2>{house.landlord}</h2>
               </div>
            ))}
        </div>
        )
    }

}
export default ListingPage