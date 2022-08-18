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

//Files and videos
import video from '../files/file.mp4';

class MainPage extends Component {
    
    render() {
        return(
            <div>
                <Container object-fit='cover' width='1536 px' height='1150px' margin-top='0' box-sizing='border-box' style={{ 
                    alignSelf: 'left',
                    marginLeft:'0px',
                    flexDirection: 'row',
                    alignContent: 'flex-start',
                    display: 'fixed'
                }}>
                    <video
                    display="block"
                    width="1536px"
                    height="1150px"
                    object-fit="cover"
                    preload="auto"
                    loop
                    autoPlay
                    muted
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </Container>
            </div>
        )}};

export default MainPage;