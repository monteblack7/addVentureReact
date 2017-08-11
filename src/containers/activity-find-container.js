import React from "react";
import ActivityFind from "../components/activity-find";
import autoBind from "react-autobind";

class ActivityFindContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.post,
            edit: false
        };
        autoBind(this)
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    render() {
        console.log(this.props.currentStatePosts);
        return (
            <div>
                <ActivityFind myMap={this.myMap} handleSave={this.props.handleSave}
                              handleUpvote={this.props.handleUpvote} handleDownvote={this.props.handleDownvote}
                              handleChange={this.handleChange} input={this.state} post={this.props.post}
                              handleRemove={this.props.handleRemove}/>
            </div>
        )
    }
}

export default ActivityFindContainer;