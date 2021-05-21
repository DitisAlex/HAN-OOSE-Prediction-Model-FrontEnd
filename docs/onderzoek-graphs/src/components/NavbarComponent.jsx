import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import ApexChart from './ApexCharts';
import Charts from './Charts';
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

export default function NavbarComponent(props) {

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand>Prediction Model</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <Link to="/apex">
                            <NavLink>Apex Charts</NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/charts">
                            <NavLink>Charts.js</NavLink>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/apex" component={ApexChart} />
                <Route path="/charts" component={Charts} />
            </Switch>
        </div>
    )
}