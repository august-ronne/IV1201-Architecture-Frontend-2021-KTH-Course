import React, { useState, useRef, useEffect } from "react";
import AuthService from "../Services/AuthService";
import Message from "../Components/Message";
import T from "../translation";

const Register = (props) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
    });
    const [serverMessage, setServerMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        };
    }, []);

    const onChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };
    const resetForm = () => {
        setUser({
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        AuthService.register(user).then((data) => {
            console.log(data);
            const { serverMessage } = data;
            console.log(serverMessage);
            setServerMessage(serverMessage);
            console.log(serverMessage);
            resetForm();
            if (!serverMessage.isError) {
                timerID = setTimeout(() => {
                    props.history.push("/login");
                }, 2000);
            }
        });
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>{T("title.register")}</h3>

                <label htmlFor="firstName">{T("label.firstName")}</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder={T("placeholder.firstName")}
                    value={user.firstName}
                    onChange={onChange}
                />
                <br/>
                <label htmlFor="lastName">{T("label.lastName")}</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder={T("placeholder.lastName")}
                    value={user.lastName}
                    onChange={onChange}
                />
                <br/>
                <label htmlFor="email">{T("label.email")}</label>
                <input
                    type="text"
                    name="email"
                    placeholder={T("placeholder.email")}
                    value={user.email}
                    onChange={onChange}
                />
                <br/>
                <label htmlFor="username">{T("label.username")}</label>
                <input
                    type="text"
                    name="username"
                    placeholder={T("placeholder.username")}
                    value={user.username}
                    onChange={onChange}
                />
                <br/>
                <label htmlFor="password">{T("label.password")}</label>
                <input
                    type="text"
                    name="password"
                    placeholder={T("placeholder.password")}
                    value={user.password}
                    onChange={onChange}
                />
                <br/>
                <button type="submit">{T("button.register")}</button>
            </form>
            {serverMessage ? <Message message={serverMessage} /> : null}
        </div>
    );
};

export default Register;
