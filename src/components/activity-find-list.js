import React from "react";
import ActivityFindContainer from "../containers/activity-find-container";

class ActivityFindList extends React.Component {
    genPosts() {
        console.log(this.props.currentStatePosts);
        return this.props.currentStatePosts.map((item, index) => {
            return <ActivityFindContainer handleRemove={this.props.handleRemove}
                                          handleDownvote={this.props.handleDownvote}
                                          handleUpvote={this.props.handleUpvote} handleSave={this.props.handleSave}
                                          post={item} key={item.sport + index}/>
        })
    }

    render() {
        return (
            <div>
                <div className="col-md-offset-2 col-md-8">
                    <select value={this.props.input} onChange={(event) =>{
                        this.props.handleChange("currentState", event)
                    }} className="form-control">
                        <option value="">(select)</option>
                        <option value="Utah">Utah</option>
                        <option value="Wyoming">Wyoming</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Idaho">Idaho</option>
                        {/*<option value="Massachusetts">Massachusetts</option>*/}
                        {/*<option value="Washington">Washington D.C.</option>*/}
                    </select>
                    <button onClick={() =>{
                        this.props.getStatePosts(this.props.input)
                    }} className="form-control">Submit</button>
                </div>
                {this.genPosts()}
            </div>
        )
    }
}

export default ActivityFindList;