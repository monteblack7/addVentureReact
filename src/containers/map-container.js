import React from "react";

import Map from "../components/map.js";
import {connect} from "react-redux";
import * as actionCreators from "../actions";
// import autoBind from "react-autobind";

class MapContainer extends React.Component {
    componentWillMount() {
        this.props.loadMarkers();
    }
    render() {
        return (
            <Map handleDelete={this.props.deleteMarker} handleAdd={this.props.addMarker} handleSet={this.props.setCurrent} selected={this.props.selected} markers={this.props.markers} containerElement={<div style={{height: "400px", width: "100%"}}></div>} mapElement={<div style={{height: "100%"}}></div>}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(MapContainer);