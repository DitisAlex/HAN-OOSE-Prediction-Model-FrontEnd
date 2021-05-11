import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import Login from './Login';
import Logout from './Logout';
import AdminPage from './AdminPage';
import DataPageA from './DataPageA';
import DataPageB from './DataPageB';
import NavbarComponent from './NavbarComponent';
import Production from './pages/production/Production';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <NavbarComponent/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={DataPageA} />
                        <Route path="/data" component={DataPageB} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/admin" component={AdminPage} />
                        <Route path="/production" component={Production} />
                    </Switch>
                </div>
            </div>
        )
    }
}