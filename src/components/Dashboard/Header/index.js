import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from "../styles";
import {compose} from "redux";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import {NavLink} from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from "@material-ui/core/Badge";

class Header extends Component {

    render() {
        const {classes, handleDrawerOpen} = this.props;
        return (
            <AppBar position="static" className={classes.wpHeader}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton>

                    <NavLink to='/' className={classes.thumbLogo}>
                        <img src='images/0.png' className={classes.imgLogo} alt=""/>
                    </NavLink>
                    <div className={classes.search}>
                        <Button className={classes.searchIcon}>
                            <SearchIcon className={classes.icon}/>
                        </Button>
                        <InputBase
                            placeholder="Search…"
                            className={classes.inputSearch}
                        />
                    </div>
                    <div className={classes.menuRight}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="primary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="primary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>


        );
    }
}

export default compose(
    withStyles(styles)
)(Header)