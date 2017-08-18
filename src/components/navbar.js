import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return(
            <ul>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/add">Add Activity</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="#sign-in">Sign In</Link></li>
            </ul>
        )
    }
}

export default Navbar;