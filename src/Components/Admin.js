import React, { useState, useRef, useEffect } from "react";
import T from "../translation";
import AuthService from "../Services/AuthService";

/**
 * Component showing an admin only page
 */
const Admin = () => {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        return () => {
            AuthService.getProfiles().then((servermessage) => {
                setProfiles(servermessage.profiles)
                console.log(servermessage.profiles[0].competence.name)
            })
        };
    }, []);


    return <h1>Admin page, 
                todo:link to applications and upgrade users to recruiter</h1>;
};

export default Admin;
