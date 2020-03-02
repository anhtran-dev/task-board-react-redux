import React, {Component} from 'react';
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import MinimizeIcon from "@material-ui/icons/Minimize";
import CardActions from "@material-ui/core/CardActions";
import {NavLink} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@material-ui/core/Card";
import styles from "./styles";
import {withStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";

class TaskItem extends Component {

    render() {
        let {classes, task, status,onEditTask,onDeleteTask} = this.props;
        return (
            <Card>
                <CardContent>
                    <Grid container spacing={2} justify={"space-between"}>
                        <Grid item md={8}>
                            <h5 className={classes.titleTask}>
                                <MinimizeIcon className={classes.icon}/> {task.title}
                            </h5>
                            <p className={classes.taskDesc}>Description: {task.desc}</p>
                        </Grid>
                        <Grid item md={4}>
                            <h6 className={classes.status}>{status.label}</h6>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <div className={classes.wpIconAction}>
                        <Button className={classes.btnAction}>
                            {/*<NavLink to="">*/}
                                <EditIcon
                                    className={`${classes.icon} ${classes.iconAction}`}
                                    color="primary"
                                    onClick={onEditTask}
                                />
                            {/*</NavLink>*/}
                        </Button>
                        <Button className={classes.btnAction}>
                            {/*<NavLink to="">*/}
                                <DeleteIcon
                                    className={`${classes.icon} ${classes.iconAction}`}
                                    color="secondary"
                                    onClick={onDeleteTask}
                                />
                            {/*</NavLink>*/}
                        </Button>

                    </div>

                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);