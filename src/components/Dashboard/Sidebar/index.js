import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from "../styles";
import {compose} from "redux";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {NavLink} from "react-router-dom";

class Sidebar extends Component {
    render() {
        const {classes, open, close} = this.props;
        return (
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={close}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List className={classes.wpLink}>
                    <NavLink to="/" className={classes.link} exact activeClassName={classes.active} >Home</NavLink>
                    <NavLink to="/task-board" className={classes.link} exact activeClassName={classes.active}>Manager Task</NavLink>
                </List>

            </Drawer>
        );
    }
}

export default compose(
    withStyles(styles)
)(Sidebar)