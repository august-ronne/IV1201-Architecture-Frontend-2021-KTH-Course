import React, { useState, useContext } from "react";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import Message from "../Components/Message";
import T from "../translation";

const Login = (props) => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [serverMessage, setServerMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }
    const onSubmit = (event) => {
        event.preventDefault();
        AuthService.login(user).then((data) => {
            console.log(data);
            const { isAuthenticated, user, serverMessage } = data;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push("/");
            } else {
                setServerMessage(serverMessage);
            }
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>{T("title.signin")}</h3>
                <label htmlFor="email" className="sr-only">
                    {T("label.email")}
                </label>
                <input
                    type="text"
                    name="email"
                    onChange={onChange}
                    placeholder={T("placeholder.email")}
                />
                <label htmlFor="password" className="sr-only">
                    {T("label.password")}
                </label>
                <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    placeholder={T("placeholder.password")}
                />
                <button
                    type="submit"
                >
                    {T("button.login")}
                </button>
            </form>
            {serverMessage ? <Message message={serverMessage} /> : null }
        </div>
    );
};

export default Login;