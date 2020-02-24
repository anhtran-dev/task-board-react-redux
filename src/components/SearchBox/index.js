import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from "./styles";
import {compose} from 'redux';
import TextField from "@material-ui/core/TextField";

class SearchBox extends Component {

    render() {
        const {classes,onHandleChange} = this.props;
        return (

            <form className={classes.formSearch} noValidate autoComplete="off">
                <h4>Search box</h4>
                <TextField className={classes.textField} id="standard-secondary" color="secondary"
                            onChange={onHandleChange}
                           placeholder="Enter keywords ...."
                           size="small"
                />

            </form>

        );
    }
}

export default compose(
    withStyles(styles)
)(SearchBox)