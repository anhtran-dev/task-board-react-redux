import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import {compose} from "redux";
import styles from "./styles";

class AdminHomePage extends Component {
    render() {
        const {classes} = this.props;
        return (
            // <div className={classes.wpHomePageAdmin}>
            <div className={classes.wpInner}>
                <p className={classes.titlePage}>Wellcome</p>
            </div>

            // </div>
        );
    }
}

export default compose(
    withStyles(styles)
)(AdminHomePage)
;