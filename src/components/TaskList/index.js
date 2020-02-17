import React, {Component} from 'react';

import {withStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TaskItem from "../TaskItem";
import styles from "./styles";
class TaskList extends Component {

    render() {
        const {classes,status,taskTitleFilter} = this.props;
        return (
            <Grid item md={4} xs={12}>
                <h4 className={classes.titleStatus}>{status.label}</h4>
                <div className={classes.wpListTask}>
                    {taskTitleFilter.map(task => (
                            <TaskItem key={task.id}
                                      task ={task}
                                      status ={status}
                            />
                        )
                    )}
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);