import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from "./styles";
import LoadingIcon from './../../asset/images/loading.gif';
import {bindActionCreators, compose} from "redux";
import {connect} from "react-redux";
import * as uiActionCreators from "./../../actions/ui";

class GlobalLoading extends Component {
    render() {
        const {classes, showLoading} = this.props;

        let xhtml = null;
        if (showLoading) {
            xhtml = (
                <div className={classes.globalLoading}>
                    <img className={classes.icon} src={LoadingIcon} alt=""/>
                </div>
            )
        }
        return xhtml;
    }
}

const mapStateToProps = (state) => {
    return {
        showLoading: state.uiReducer.showLoading
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        uiActions: bindActionCreators(uiActionCreators, dispatch)
    }
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(GlobalLoading)
