import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

export default function NavbarComponent() {
  return (
    <Navbar color="dark" dark className="navbar-expand">
      <Link to="/">
        <NavbarBrand id="homepage">Prediction Model</NavbarBrand>
      </Link>
      <Nav navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret className="text-light" id="dropdownToggle">
            Models
          </DropdownToggle>

          <DropdownMenu>
            <Link to="/consumption" className="text-light" id="consumptionPage">
              <DropdownItem>EV power</DropdownItem>
            </Link>
            <Link to="/production" className="text-light" id="productionPage">
              <DropdownItem>Solar power</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  )
}
