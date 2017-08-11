import React from "react";
import GroupForm from "../components/group-form";
import autoBind from "react-autobind";

import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";

class GroupFormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            sport: "",
            label: "",
            lat: "",
            lng: "",
            locationstate: "",
            day: "",
            time: "",
            details: ""
        };
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]:event.target.value
        })
    }
    handleClick(data) {
        console.log(data);
        this.props.addMarker(data);
        this.setState({
            sport: "",
            label: "",
            lat: "",
            lng: "",
            locationstate: "",
            day: "",
            time: "",
            details: ""
        })
    }
    render() {
        return(
            <div>
                <GroupForm input={this.state} handleChange={this.handleChange} handleClick={this.handleClick} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(GroupFormContainer);