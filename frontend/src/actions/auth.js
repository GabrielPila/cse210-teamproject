import axios from "axios";

export const register = (username, password, email) => {
  const config = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password, email });
  axios
    .post("http://localhost:8000/signup/", body, config)
    .then((res) => {
      console.log("res", res);
      if (res.data.error) {
        console.log("error", res.data.error);
        alert("User already exists, please login!")  
      }
    })
    .catch((error) => {
      if (error.response) {
        console.log("error.response", error.response);
        console.log("error.response.status", error.response.status);
        console.log(error.response.headers);
      }
    });
};
