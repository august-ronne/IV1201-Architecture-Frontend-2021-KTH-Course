import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Styles/App.css";

import { Home, Register, Login, Navbar, UsersOnly, Admin, Recover, SetPassword } from "./Components/index";
import { PrivateRoute, PublicRoute, AdminRoute } from "./HoCs/index";

/**
 * Main component of the client, holds the navbar and relevant component according to the path.
 */
function App() {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <AdminRoute exact path="/admin" component={Admin}/>
            <PublicRoute exact path="/register" component={Register} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/recover" component={Recover} />
            <PublicRoute exact path="/recoverpwd" component={SetPassword} />
            <PrivateRoute exact path="/usersonly" component={UsersOnly} />
        </Router>
    );
}

export default App;