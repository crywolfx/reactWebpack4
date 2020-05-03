import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import config from './config';
const PrimaryLayout = () => (
    <div className="primary-layout">
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/count">Count</Link></li>
                <li><Link to="/loader">Loader</Link></li>
            </ul>
        </header>
        <main>
            <Switch>
                {
                    config.map((props) => <Route {...props} />)
                }
            </Switch>
        </main>
    </div>
);
export default PrimaryLayout;