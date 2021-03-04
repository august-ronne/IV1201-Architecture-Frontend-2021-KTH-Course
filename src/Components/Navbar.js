import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import {T, LANG_LIST} from "../translation";


/**
 * Navbar component of the client. Always shown on top.
 * @param props props sent to the component
 */


const Navbar = (props) => {
    const { user, setUser, isAuthenticated, setIsAuthenticated, role, setRole } = useContext(
        AuthContext
    );

    /**
     * Method for when the logout button is used.
     */
    const onClickLogoutHandler = () => {
        AuthService.logout().then((serverMessage) => {
            if (!serverMessage.isError) {
                setUser(serverMessage.user);
                setIsAuthenticated(false);
                setRole("")
            }
        });
    };

    /**
     * Method listing the available languages of the client. 
     */
    const languageSelect = () => {
        return LANG_LIST.map((e, i) => {
            return (
            <a href={"?lang="+e}>
                <li key={i}>{e}</li>
            </a>
            )
        })
    }

    /**
     * Method showing the navbar when an unauthenticated user is browsing.
     */
    const unauthenticatedNavbar = () => {
        return (
            <>
                <Link to="/">
                    <li>{T("nav.home")}</li>
                </Link>
                <Link to="/login">
                    <li>{T("nav.login")}</li>
                </Link>
                <Link to="/register">
                    <li>{T("nav.register")}</li>
                </Link>
                <Link to="/recover">
                    <li>{T("nav.recover")}</li>
                </Link>
            </>
        );
    };

    /**
     * Method showing the navbar when an authenticated user is browsing.
     */
    const authenticatedNavbar = () => {
        return (
            <>
                <Link to="/">
                    <li>{T("nav.home")}</li>
                </Link>
                <Link  to="/usersonly">
                    <li id='auth-user'>{T("nav.usersonly")}</li>
                </Link>
                <button
                    id='logout-navbar'
                    type="button"
                    onClick={onClickLogoutHandler}
                >
                    {T("button.logout")}
                </button>
            </>
        );
    };

    /**
     * Method showing additional content for authorized users.
     */
    const authorizedNavbar = () => {
        return (
            <>
                <Link to="/admin">
                    <li id='admin-navbar' >Show application</li>
                </Link>
            </>
        )
    }

    return (
        <nav>
            <div>
                <Link id='homepage-navbar' to="/">
                    <div>{T("title.homePage")}</div>
                </Link>
                <div>
                    <ul>
                        {!isAuthenticated
                            ? unauthenticatedNavbar()
                            : authenticatedNavbar()}
                        {(role === "recruiter")?
                            authorizedNavbar()
                            : null}
                    </ul>
                </div>
            </div>
            <ul>{languageSelect()}</ul>
        </nav>
    );
};

export default Navbar;
