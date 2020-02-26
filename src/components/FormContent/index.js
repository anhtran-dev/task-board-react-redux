import React, {Component} from 'react';
import {Field} from "redux-form";
import renderTextField from "../FormHelper/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import styles from "./styles";
import {withStyles} from "@material-ui/styles";
import {compose} from "redux";
import {connect} from "react-redux";


class FormContent extends Component {
    render() {
        const {classes, taskEdit} = this.props;
        let title = taskEdit ? taskEdit.title : "";
        let desc = taskEdit ? taskEdit.desc : "";
        console.log(taskEdit);


        return (
            <DialogContent>
                {/*<TextField autoFocus*/}
                {/*           label="Title"*/}
                {/*           type="text"*/}
                {/*           fullWidth*/}
                {/*           onChange={this.onHandleChange}*/}
                {/*           style={{*/}
                {/*               marginBottom: "30px",*/}
                {/*           }}*/}
                {/*           name="title"*/}

                {/*>*/}
                {/*</TextField>*/}
                {/*<TextField label="Description"*/}
                {/*           type="text"*/}
                {/*           fullWidth*/}
                {/*           onChange={this.onHandleChange}*/}
                {/*           style={{*/}
                {/*               marginBottom: "30px"*/}
                {/*           }}*/}
                {/*           name="desc"*/}
                {/*>*/}
                {/*</TextField>*/}
                <Field
                    autoFocus
                    name="title"
                    component={renderTextField}
                    label="Title"
                    fullWidth
                    className={classes.textField}
                    value={title}

                />
                <Field
                    name="desc"
                    label="Description"
                    component={renderTextField}
                    fullWidth
                    className={classes.textField}
                    value={desc}

                />

            </DialogContent>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        taskEdit : state.tasks.taskEdit,
        initialValues : state.tasks.taskEdit

    }
};
const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(FormContent)