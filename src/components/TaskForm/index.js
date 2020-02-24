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
    // state = {
    //     title : '',
    //     desc : ''
    // };
    onHandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };
    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        let {classes, onClose} = this.props;
        let {open} = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="sm">
                <form action="" onSubmit={this.onHandleSubmit} className={classes.wpFormTask}>
                    <DialogTitle className={classes.headerForm} id="form-dialog-title">
                        <p className={classes.titleForm}>Add new task</p>
                    </DialogTitle>
                    <DialogContent>
                        <TextField autoFocus
                                   label="Title"
                                   type="text"
                                   fullWidth
                                   onChange={this.onHandleChange}
                                   style={{
                                       marginBottom: "30px",
                                   }}
                                   name="title"

                        >
                        </TextField>
                        <TextField label="Description"
                                   type="text"
                                   fullWidth
                                   onChange={this.onHandleChange}
                                   style={{
                                       marginBottom: "30px"
                                   }}
                                   name="desc"
                        >
                        </TextField>


                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="primary" type="submit">Add</Button>
                        <Button variant="outlined" color="secondary" type="reset">Reset</Button>
                    </DialogActions>
                </form>

            </Dialog>
        );
    }
}

export default withStyles(styles)(TaskForm);