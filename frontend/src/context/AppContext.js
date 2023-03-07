import { createContext, useState} from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [username, setUsername] = useState(()=> {
        const username = localStorage.getItem("username") || "";
        if (username === undefined || username === "" || username === null){
            return ""
        }
        return username;
    })
    const [token, setToken] = useState(()=> {
        const token = localStorage.getItem("token") || "";
        if (token === undefined || token === "" || token === null){
            return ""
        }
        return token;
    });
    
    return (
        <AppContext.Provider value={{ username, setUsername, token, setToken }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider}
