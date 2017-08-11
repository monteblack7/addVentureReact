import React from "react";

class ActivityFind extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-custom">
                        <h1 className="custom-font">JOINED: {this.props.post.upvotes}</h1>
                        <i onClick={() => {
                            this.props.handleUpvote(this.props.post._id);
                        }} className="custom-font">JOIN
                        </i>
                    </div>
                    <div className="col-md-5 col-custom">
                        <h1 id="sport-title">{this.props.post.sport}</h1>
                        <h3 id="address">{this.props.post.locationstate}</h3>
                        <h3 id="address">{this.props.post.day} @ {this.props.post.time}</h3>
                    </div>
                    <div className="col-md-5 col-custom">
                        <h3>Notes: {this.props.post.details}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivityFind;