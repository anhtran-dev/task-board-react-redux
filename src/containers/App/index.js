import React, {Component} from 'react';
import styles from "../../styles";
import {withStyles} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../../commons/theme";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "../../components/Dashboard";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Dashboard/>
                {this.props.children}
                <ToastContainer autoClose={1000}
                />
            </ThemeProvider>

        );
    }
}

export default withStyles(styles)(App);