import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styles from "./styles";
import {withStyles} from "@material-ui/core";
class TaskForm extends Component {
    render() {
        let {classes,onAddTask,onClose} = this.props;
        let {open} = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title"  fullWidth maxWidth="sm">
                <DialogTitle id="form-dialog-title">
                    <p className={classes.titleForm}>Add new task</p>
                </DialogTitle>
                <DialogContent>
                    <TextField autoFocus
                               label="New Task"
                               type="text"
                               fullWidth
                    >
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={onAddTask}>Add</Button>
                    <Button color="secondary" onClick={onClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(TaskForm);