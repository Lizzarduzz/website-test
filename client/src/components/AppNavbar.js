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
            <Navbar color='dark' dark expand="sm" className="mb-0" position='absolute'>
                    <Nav style={{
                        paddingLeft: '2vw',
                        display: 'flex',
                        width: '100%'
                    }}>
                        <NavItem>
                            <Container>
                                <img src={logo}
                                    object-fit="contain" 
                                    alt="Logo"
                                    align="center"
                                    width="80%"
                                    height="100%"
                                    />
                            </Container>
                        </NavItem>
                    </Nav>
                <Container align='right' style={{ justifyContent:'right' }}>
                    <NavbarBrand href="/">
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar />
                        <Nav className="ml-auto" navbar style={{
                            justifyContent:'right'
                    }}>
                            <NavItem style={{ paddingBottom: '2vw', fontSize: '1vw' }}>
                                <NavLink href="https://github.com">
                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem style={{ paddingBottom: '2vw', paddingLeft: '2vw', fontSize: '1vw'}}>
                                <NavLink href="https://github.com">
                                    About us
                                </NavLink>
                            </NavItem>

                            <NavItem style={{ paddingBottom: '2vw', paddingLeft: '2vw', fontSize: '1vw'}}>
                                <NavLink href="https://github.com">
                                    Industries
                                </NavLink>
                            </NavItem>

                            <NavItem style={{ paddingBottom: '2vw', paddingLeft: '2vw', fontSize: '1vw'}}>
                                <NavLink href="https://github.com">
                                    Services
                                </NavLink>
                            </NavItem>

                            <NavItem style={{ paddingBottom: '2vw', paddingLeft: '2vw', fontSize: '1vw'}}>
                                <NavLink href="https://github.com">
                                    News
                                </NavLink>
                            </NavItem>
                            
                            <Nav style={{
                                paddingLeft: '5vw',
                                paddingBottom: '1.3vw'
                            }}>
                                <NavItem style={{ alignSelf: 'center', paddingBottom: '0.7vw'}}>
                                    <NavLink href="https://www.linkedin.com/company/jh-aerotract-llc">
                                        <img src={linkedin} 
                                        object-fit="cover" 
                                        alt="Logo_l" 
                                        style={{ alignSelf: 'center', width:'80%', height:'80%', display:'flex'}}
                                        align="center"
                                        />
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav style={{
                                paddingLeft: '0vw',
                                paddingBottom: '1.3vw'
                            }}>
                                <NavItem style={{ alignSelf: 'center', paddingBottom: '0.7vw' }}>
                                    <NavLink href="https://www.instagram.com/aerotractone/">
                                        <img src={insta} 
                                        object-fit="cover" 
                                        alt="Logo_i" 
                                        style={{ alignSelf: 'center', width:'80%', height:'80%', display:'flex'}}
                                        align="center"
                                        />
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav style={{
                                paddingLeft: '0rem',
                                paddingBottom: '1.3vw'
                            }}>
                                <NavItem style={{ alignSelf: 'center', paddingBottom: '0.7vw' }}>
                                    <NavLink href="http://www.facebook.com/aerotractone">
                                        <img src={facebook} 
                                        object-fit="cover" 
                                        alt="Logo_f" 
                                        style={{ alignSelf: 'center', width:'80%', height:'80%', display:'flex'}}
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