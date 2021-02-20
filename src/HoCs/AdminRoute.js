import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const AdminRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, role } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!(role === 'recruiter')) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location },
                            }}
                        />
                    );
                }
                return <Component {...props} />;
            }}
        />
    );
};

export default AdminRoute;