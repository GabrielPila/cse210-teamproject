import axios from "axios";
// import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// export const login = (username, password) => {
//   const config = {
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//     },
//   };
//   const body = JSON.stringify({ username, password });
//   // let success = false;
//   axios.post("http://localhost:8000/login/", body, config)
//     .then((res) => {
//       console.log("res", res);
//       // console.log("res.data.error", res.data.error)
//       if (res.data.error) {
//         console.log("error", res.data.error);
//         // success =  false
//       } else{
//         success = true
//         // console.log("success", success)
//       }
//     })
//     .catch((error) => {
//       // console.log("success", success)
//       // console.log("catch error", error);
//       if (error.response) {
//         console.log("error.response", error.response);
//         console.log("error.response.status", error.response.status);
//         console.log(error.response.headers);
//         // success =  false
//       }
      
//     });
//     // console.log("success", success)
//     return success
  
// };


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
      // console.log("resdata", res.data.error);
      if (res.data.error) {
        console.log("error", res.data.error);
        alert("User already exists, please login!")
        //     dispatch({
        //       type: REGISTER_FAIL,
        //     });
        //   } else {
        //     dispatch({
        //       type: REGISTER_SUCCESS,
        //     });
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
