import Login from "../pages/Login";

const withAuth = (component) => {
    const username = localStorage.getItem("username") || "";
    const token = localStorage.getItem("token") || "";
    if (username !== "" && token !== "") {
        return component;
    }else{
        return "";
    }
}


export default withAuth;