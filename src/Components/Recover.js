import React, { useState, useRef, useEffect, useContext } from "react";
import { Formik, Form, Field } from "formik";

import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
import Message from "./Message";
import RecoverSchema from "../Models/RecoverFormModel";
import T from "../translation";

const Recover = (props) => {
    const [userMessage, setUserMessage] = useState(null);
    const authContext = useContext(AuthContext);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        };
    }, []);

    const handleSubmit = (userData) => {
        console.log(userData);

        AuthService.recover(userData).then((serverMessage) => {
            console.log(serverMessage);
            const { recoveryToken, msgBody } = serverMessage;
            console.log("SENT BY EMAIL: ", recoveryToken);
            timerID = setTimeout(() => {
                props.history.push("/recoverpwd");
            }, 2000);
            setUserMessage(T(msgBody));
        });
    };

    return (
        <div>
            <h3>{T("title.recover")}</h3>
            <Formik
                initialValues={{
                    email: "",
                }}
                validationSchema={RecoverSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="email">{T("label.email")}</label>
                        <Field name="email" placeholder={T("placeholder.email")} />
                        {errors.email && touched.email ? (
                            <Message message={errors.email} />
                        ) : null}

                        <button type="submit">{T("button.submit")}</button>
                        {userMessage ? <Message message={userMessage} /> : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Recover;
