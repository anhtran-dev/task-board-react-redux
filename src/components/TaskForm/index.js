import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styles from "./styles";
import {withStyles} from "@material-ui/core";
import {compose} from "redux";
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import validate from "./validate";
import * as taskActionCreators from "./../../actions/tasks";
import {bindActionCreators} from "redux";
import renderTextField from "../FormHelper/TextField";
import DialogContent from "@material-ui/core/DialogContent";

class TaskForm extends Component {

    onHandleSubmit = (data) => {
        const {title, desc} = data;
        const {taskActions} = this.props;
        const {addTask} = taskActions;
        addTask(title, desc);
    };

    render() {
        let {classes, onClose, showModal, changeTitle, handleSubmit, invalid, submitting, taskEdit} = this.props;

        return (
            <Dialog open={showModal} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="sm">
                <form action="" onSubmit={handleSubmit(this.onHandleSubmit)} className={classes.wpFormTask}>
                    <DialogTitle className={classes.headerForm} id="form-dialog-title">
                        <p className={classes.titleForm}>{changeTitle}</p>
                    </DialogTitle>
                    <DialogContent>

                        <Field
                            autoFocus
                            name="title"
                            component={renderTextField}
                            label="Title"
                            fullWidth
                            className={classes.textField}
                            value={taskEdit ? taskEdit.title : null}

                        />
                        <Field
                            name="desc"
                            label="Description"
                            component={renderTextField}
                            fullWidth
                            className={classes.textField}
                            value={taskEdit ? taskEdit.desc : null}

                        />

                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="primary" type="submit"
                                disabled={invalid || submitting}>Add</Button>
                        <Button variant="outlined" color="secondary" type="reset">Reset</Button>
                    </DialogActions>
                </form>

            </Dialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showModal: state.modalReducer.showModal,
        changeTitle: state.modalReducer.title,
        changeContent: state.modalReducer.component,
        taskEdit: state.tasks.taskEdit,
        initialValues: state.tasks.taskEdit

    }
};
const mapDispatchToProps = dispatch => {
    return {
        taskActions: bindActionCreators(taskActionCreators, dispatch)
    }
};
const FORM_NAME = "TASK_MANAGER";
const withReduxForm = reduxForm({
    // a unique name for the form
    form: FORM_NAME,
    validate
});

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
    withReduxForm
)(TaskForm)
