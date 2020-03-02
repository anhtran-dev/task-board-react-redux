import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles';
import styles from "./styles";
import {compose} from "redux";
import Header from "./Header";
import Sidebar from "./Sidebar";

class Dashboard extends Component {
    state = {
        open: false
    };
    handleDrawerOpen = () => {
        this.setState({
            open: true
        })
    };
    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;
        return (
            <div className={classes.wpDashboard}>
                <Header handleDrawerOpen={this.handleDrawerOpen}/>
                <div className={classes.wrapperContent}>
                    {this.props.children}
                </div>

                <Sidebar open={open}
                         close={this.handleDrawerClose}
                />
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)
(Dashboard)