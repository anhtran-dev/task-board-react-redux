import React, {Component} from 'react';
import '../../404.css';
import {Link} from "react-router-dom";
class NotFound extends Component {
    render() {
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>
                    <Link to={`/`}>Go to home</Link>
                </div>
            </div>
        );
    }
}

export default NotFound;