import React, { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";
import T from "../translation";

/** 
    AuthContext object gives us <Provider> and <Consumer> 
    Anything that is wrapped within a <Provider> will have access
    to the global state. You also have to "consume" the global state
*/

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [role, setRole] = useState("");

    console.log("isAuthenticated change ", isAuthenticated);

    /**
     * Initializes the context with relevant information.
     */
    useEffect(() => {
        AuthService.isAuthenticated(localStorage.getItem("token")).then((serverMessage) => {
            console.log("auth", serverMessage);
            setUser(serverMessage.user);
            setIsAuthenticated(serverMessage.isAuthenticated);
            setIsLoaded(true);
            setRole(serverMessage.user ? serverMessage.user.role : null);
            // setRole(serverMessage.user.role)
        });
    }, []);

    return (
        <div>
            {!isLoaded ? (
                <h1>{T("title.loading")}</h1>
            ) : (
                <AuthContext.Provider
                    value={{
                        user,
                        setUser,
                        isAuthenticated,
                        setIsAuthenticated,
                        role,
                        setRole,
                    }}
                >
                    {children}
                </AuthContext.Provider>
            )}
        </div>
    );
}
export default AuthProvider;
