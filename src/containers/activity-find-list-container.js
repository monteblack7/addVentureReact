import React from "react";
import ActivityFindList from "../components/activity-find-list";
import MapContainer from "../containers/map-container";
import {connect} from "react-redux";
import * as actionCreators from "../actions/";
import autoBind from "react-autobind";

class ActivityFindListContainer extends React.Component {
    constructor() {
        super();
        autoBind(this);
        this.state = {
            currentState: ""
        }

    }

    componentWillMount() {
        this.props.loadData();
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <MapContainer/>
                <ActivityFindList currentStatePosts={this.props.currentStatePosts} handleChange={this.handleChange}
                                  input={this.state.currentState} getStatePosts={this.props.getStatePosts}
                                  posts={this.props.posts} handleUpvote={this.props.upVoteData}
                                  handleDownvote={this.props.downVoteData} handleRemove={this.props.deleteData}
                                  handleSave={this.props.updateData}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, actionCreators)(ActivityFindListContainer);