import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import {T, LANG_LIST} from "../translation";

const Navbar = (props) => {
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
        AuthContext
    );

    const onClickLogoutHandler = () => {
        AuthService.logout().then((serverMessage) => {
            if (!serverMessage.isError) {
                setUser(serverMessage.user);
                setIsAuthenticated(false);
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
                <Link to="/usersonly">
                    <li>{T("nav.usersonly")}</li>
                </Link>
                <button
                    type="button"
                    onClick={onClickLogoutHandler}
                >
                    {T("button.logout")}
                </button>
            </>
        );
    };

    return (
        <nav>
            <div>
                <Link to="/">
                    <div>{T("title.homePage")}</div>
                </Link>
                <div>
                    <ul>
                        {!isAuthenticated
                            ? unauthenticatedNavbar()
                            : authenticatedNavbar()}
                    </ul>
                </div>
            </div>
            <ul>{languageSelect()}</ul>
        </nav>
    );
};

export default Navbar;
