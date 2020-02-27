import React, {Component} from 'react';
import App from "./containers/App";
import AdminHomePage from "./containers/AdminHomePage";
import {Route,Switch} from "react-router-dom";
import TaskBoard from "./containers/Taskboard";
import NotFound from "./components/NotFound";

class Routes extends Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route path='/' exact component={AdminHomePage}/>
                    <Route path='/task-board' component={TaskBoard}/>
                    <Route component={NotFound}/>
                </Switch>
            </App>
        );
    }
}

export default Routes;