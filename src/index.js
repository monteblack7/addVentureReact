import React from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter, Switch} from "react-router-dom";

import ActivityFindListContainer from "./containers/activity-find-list-container";
import "./index.css";

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import Navbar from "./components/navbar";
import About from "./components/about";
import GroupFormContainer from "./containers/group-form-container";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar/>
                        <Switch>
                            <Route exact path = "/" component={ActivityFindListContainer}/>
                            <Route exact path = "/add" component={GroupFormContainer}/>
                            <Route exact path = "/about" component={About}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));