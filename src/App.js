import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Styles/App.css";

import { Home, Register, Login, Navbar, UsersOnly, Admin, Recover } from "./Components/index";
import { PrivateRoute, PublicRoute, AdminRoute } from "./HoCs/index";

function App() {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Home} />
            <AdminRoute exact path="/admin" component={Admin}/>
            <PublicRoute exact path="/register" component={Register} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/recover" component={Recover} />
            <PrivateRoute exact path="/usersonly" component={UsersOnly} />
            
        </Router>
    );
}

export default App;
