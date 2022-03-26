import React, { Component } from 'react';
import {
    Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor (props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = { collapsed: true };
    }

    toggleNavbar () {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={Link} to="/">Kara Quinn</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/about">About</NavLink>
                            </NavItem>
                            <UncontrolledDropdown inNavbar nav>
                                <DropdownToggle caret nav>Projects</DropdownToggle>
                                <DropdownMenu end dark>
                                    <DropdownItem>
                                        <NavLink tag={Link} to="/react">React</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink tag={Link} to="/mathematics">Mathematics</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink tag={Link} to="/coop">Co-Op</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink tag={Link} to="/capstone">Capstone</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Welcome, {this.props.userName}!</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}