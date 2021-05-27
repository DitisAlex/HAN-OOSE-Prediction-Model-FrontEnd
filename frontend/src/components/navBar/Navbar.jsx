import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

export default function NavbarComponent(props) {
  return (
    <Navbar color="dark" dark className="navbar-expand">
      <NavbarBrand>Prediction Model</NavbarBrand>
      <Nav className="container-fluid" navbar>
        <NavItem>
          <Link to="/" className="text-light">
            Home
          </Link>
        </NavItem>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret className="text-light">
            Models
          </DropdownToggle>

          <DropdownMenu right>
            <Link to="/consumption" className="text-light">
              <DropdownItem>Consumption data</DropdownItem>
            </Link>
            <Link to="/production" className="text-light">
              <DropdownItem>Solar power</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem className="ml-auto">
          <Link to="/login" className="text-light">
            Login
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
