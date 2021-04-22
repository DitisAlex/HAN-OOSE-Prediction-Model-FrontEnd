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

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand>Prediction Model</NavbarBrand>
                    <Nav className="container-fluid" navbar>
                        <NavItem>
                            <Link to="/">
                                <NavLink>DataA</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/data">
                                <NavLink>DataB</NavLink>
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Models
                            </DropdownToggle>
                            <DropdownMenu right>
                                <Link to="/">
                                    <DropdownItem>
                                    DataA
                                    </DropdownItem>
                                </Link>
                                <Link to="/data">
                                    <DropdownItem>
                                    DataB
                                    </DropdownItem>
                                </Link>
                                <DropdownItem divider />
                                    <DropdownItem>
                                        Exit
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className="ml-auto">
                        <Link to="/login">
                                <NavLink>Login</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={DataPageA} />
                        <Route path="/data" component={DataPageB} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/admin" component={AdminPage} />
                    </Switch>
                </div>
            </div>
        )
    }
}