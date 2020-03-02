import React, {Component} from 'react';
import App from "./containers/App";
import AdminHomePage from "./containers/AdminHomePage";
import {Route,Switch} from "react-router-dom";
import TaskBoard from "./containers/Taskboard";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

class Routes extends Component {
    render() {
        return (
            <App>

                <Dashboard>
                    <Switch>
                        <Route path='/' exact component={AdminHomePage}/>
                        <Route path='/task-board' component={TaskBoard}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Dashboard>
            </App>
        );
    }
}

export default Routes;