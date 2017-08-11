import React from "react";

class GroupForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 form-custom">
                        <input onChange={(event) => {
                            this.props.handleChange("sport", event);
                        }} placeholder="Sport" className="form-control"/>

                        <input value={this.props.input.label} onChange={(event) => {
                            this.props.handleChange("label", event);
                        }} placeholder="Label" className="form-control"/>

                        <input type="Number" value={this.props.input.lat} onChange={(event) => {
                            this.props.handleChange("lat", event);
                        }} placeholder="Lat" className="form-control"/>

                        <input type="Number" value={this.props.input.lng} onChange={(event) => {
                            this.props.handleChange("lng", event);
                        }} placeholder="Lng" className="form-control" />

                        <select onChange={(event) => {
                            this.props.handleChange("locationstate", event);
                        }} placeholder="State" className="form-control">
                            <option>State</option>
                            <option>Arizona</option>
                            <option>Idaho</option>
                            <option>Utah</option>
                            <option>Wyoming</option>
                            {/*<option>Massachusetts</option>*/}
                            {/*<option>Washington D.C.</option>*/}
                        </select>

                        {/*<input onChange={(event) => {*/}
                            {/*this.props.handleChange("city", event);*/}
                        {/*}} placeholder="City" className="form-control"/>*/}

                        {/*<input onChange={(event) => {*/}
                            {/*this.props.handleChange("address", event);*/}
                        {/*}} placeholder="Address" className="form-control"/>*/}

                        <input onChange={(event) => {
                            this.props.handleChange("day", event);
                        }} placeholder="Day" className="form-control"/>

                        <input onChange={(event) => {
                            this.props.handleChange("time", event);
                        }} placeholder="Time" className="form-control"/>
                    </div>
                    <div className="col-md-12  form-custom">
                        <input onChange={(event) => {
                            this.props.handleChange("details", event);
                        }} placeholder="Details" className="form-control details"/>

                        <button onClick={() => {
                            this.props.handleClick(this.props.input);
                        }} className="btn btn-custom form-control">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupForm;