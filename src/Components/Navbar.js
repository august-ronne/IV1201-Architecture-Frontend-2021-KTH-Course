import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import {T, LANG_LIST} from "../translation";


// testing


const Navbar = (props) => {
    const { user, setUser, isAuthenticated, setIsAuthenticated, role, setRole } = useContext(
        AuthContext
    );

    const onClickLogoutHandler = () => {
        AuthService.logout().then((serverMessage) => {
            if (!serverMessage.isError) {
                setUser(serverMessage.user);
                setIsAuthenticated(false);
                setRole("")
            }
        });
    };

    const languageSelect = () => {
        return LANG_LIST.map((e, i) => {
            return (
            <a href={"?lang="+e}>
                <li key={i}>{e}</li>
            </a>
            )
        })
    }

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
            </>
        );
    };

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

    const authorizedNavbar = () => {
        return (
            <>
                <Link to="/admin">
                    <li id='admin-navbar' >Admin</li>
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
