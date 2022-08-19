import React, {Component} from 'react';

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
    Container
} from 'reactstrap';

//images in Navbar
import logo from '../files/AeroTract_Logo_Horiz.png';
import linkedin from '../files/linkedin.png';
import insta from '../files/instagram.png';
import facebook from '../files/facebook.png';

class AppNavbar extends Component {
    state = {
            isOpen: false
        }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <div>
            <Navbar color='dark' dark expand="sm" className="mb-0">
                    <Nav style={{
                        paddingLeft: '2rem',
                        flex:'0',
                        flexDirection:'row'
                    }}>
                        <NavItem>
                            <Container padding-left="20">
                                <img src={logo} 
                                    width="292" 
                                    height="61" 
                                    object-fit="cover" 
                                    alt="Logo" 
                                    style={{ alignSelf: 'center'}}
                                    align="center"
                                    />
                            </Container>
                        </NavItem>
                    </Nav>
                <Container>
                    <NavbarBrand href="/">
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar />
                        <Nav className="ml-auto" navbar style={{
                        paddingLeft: '20rem'
                    }}>
                            <NavItem style={{ paddingBottom: '2rem' }}>
                                <NavLink href="https://github.com">
                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem style={{ paddingBottom: '2rem', paddingLeft: '2rem'}}>
                                <NavLink href="https://github.com">
                                    About us
                                </NavLink>
                            </NavItem>

                            <NavItem style={{ paddingBottom: '2rem', paddingLeft: '2rem'}}>
                                <NavLink href="https://github.com">
                                    Industries
                                </NavLink>
                            </NavItem>

                            <NavItem style={{ paddingBottom: '2rem', paddingLeft: '2rem'}}>
                                <NavLink href="https://github.com">
                                    Services
                                </NavLink>
                            </NavItem>

                            <NavItem style={{ paddingBottom: '2rem', paddingLeft: '2rem'}}>
                                <NavLink href="https://github.com">
                                    News
                                </NavLink>
                            </NavItem>
                            
                            <Nav style={{
                                paddingLeft: '5rem',
                                paddingBottom: '1.5rem'
                            }}>
                                <NavItem style={{ alignSelf: 'center', paddingBottom: '0.75rem' }}>
                                    <NavLink href="https://www.linkedin.com/company/jh-aerotract-llc">
                                        <img src={linkedin} 
                                        width="20" 
                                        height="20" 
                                        object-fit="cover" 
                                        alt="Logo" 
                                        style={{ alignSelf: 'center'}}
                                        align="center"
                                        />
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav style={{
                                paddingLeft: '0rem',
                                paddingBottom: '1.5rem'
                            }}>
                                <NavItem style={{ alignSelf: 'center', paddingBottom: '0.75rem' }}>
                                    <NavLink href="https://www.instagram.com/aerotractone/">
                                        <img src={insta} 
                                        width="20" 
                                        height="20" 
                                        object-fit="cover" 
                                        alt="Logo" 
                                        style={{ alignSelf: 'center'}}
                                        align="center"
                                        />
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav style={{
                                paddingLeft: '0rem',
                                paddingBottom: '1.5rem'
                            }}>
                                <NavItem style={{ alignSelf: 'center', paddingBottom: '0.75rem' }}>
                                    <NavLink href="http://www.facebook.com/aerotractone">
                                        <img src={facebook} 
                                        width="20" 
                                        height="20" 
                                        object-fit="cover" 
                                        alt="Logo" 
                                        style={{ alignSelf: 'center'}}
                                        align="center"
                                        />
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Nav>
                </Container>
            </Navbar>
        </div>)
    }
};

export default AppNavbar;