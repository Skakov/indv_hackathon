import React, { useEffect, useState } from "react";
import app from "../../src/FireBase";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);
    return (
        <AuthContext.Provider
            value={{
                currentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

