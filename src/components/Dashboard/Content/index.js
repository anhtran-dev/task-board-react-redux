import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from "../styles";
import {compose} from 'redux';
class Content extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)(Content)