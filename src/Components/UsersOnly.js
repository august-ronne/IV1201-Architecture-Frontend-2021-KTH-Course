import React from "react";
import T from "../translation";

/**
 * Component which is only shown if user is authenticated.
 */
const UsersOnly = () => {
    return (
        <div>
            <h1>{T("title.usersonly")}</h1>
            <p>{T("text.usersonly")}</p>
        </div>
    );
};

export default UsersOnly;
