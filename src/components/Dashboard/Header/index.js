import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from "../styles";
import {compose} from "redux";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {NavLink} from "react-router-dom";

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
                        <img src='images/0.png' className={classes.imgLogo}/>
                    </NavLink>
                </Toolbar>
            </AppBar>

        );
    }
}

export default compose(
    withStyles(styles)
)(Header)