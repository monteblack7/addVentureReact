import React from "react";

class Navbar extends React.Component {
    render() {
        return(
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/add">Add Activity</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="#sign-in">Sign In</a></li>
            </ul>
        )
    }
}

export default Navbar;