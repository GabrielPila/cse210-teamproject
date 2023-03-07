import { createContext, useState} from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [username, setUsername] = useState("")
    const [token, setToken] = useState("");
    return (
        <AppContext.Provider value={{ username, setUsername, token, setToken }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider}
