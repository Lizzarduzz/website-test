import React, {Component, useState, useEffect} from 'react';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import TextTransition, { presets } from "react-text-transition";

import '../App.css';
import Test1 from './comments/Test1.js';

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
import logo_1 from '../files/AeroTract_Logo_Horiz3.png';

//Slides
import ImageSlider from './ImageSlider'
import bckg_1 from '../files/bckg_1.png';
import bckg_2 from '../files/bckg_2.png';
import bckg_3 from '../files/bckg_3.png';

class MainPage extends Component {
    
    render() {
        const slides = [
            {url: bckg_1, title: 'One'},
            {url: bckg_2, title: 'Second'},
            {url: bckg_3, title: 'Third'},
        ]
        return(
            <div>
                <div>
                    <Container className='backg' style={{ 
                        paddingTop:'0',
                        paddingBottom:'0',
                        paddingLeft: '0',
                        paddingRight: '0',
                        marginLeft: '0',
                        marginRight: '0',
                        justifyContent: 'center'
                     }}>
                        <video className='video'
                        loop
                        autoPlay
                        muted
                        >
                            <source src={video} type="video/mp4" />
                        </video>
                        <Container className="content" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '5vw',
                            padding: '0'
                        }}>
                            <img src={logo_1}
                            alt="Logo_1"
                            object-fit="contain"
                            align="center"
                            width="60%"
                            height="60%"
                            style={{padding:"0"}}
                            />
                        </Container>

                        <Container className="content" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20vw',
                            justifyContent: 'center'
                        }}>
                                <h1 style={{ color:'white', textAlign: 'center', fontSize:'1.7vw', justifyContent: 'center' }}>
                                    Geospatial analysis and machine learning for Timber, Agricultural, and Industrial Landowners
                                </h1>
                        </Container>

                        <Container className="content" style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '28vw',
                            height: '15vw',
                            width: '25vw',
                            backgroundColor: 'rgba(255, 255, 255, .6)',
                            alignItems: 'center',
                            display: 'flex'
                        }}>

                            <div position="absolute" style={{
                            display:'block',
                            width: '20vw',
                            height: '12vw'
                            }}>
                                <Test1 />
                            </div>
                        </Container>
                    </Container>
                </div>

                <div>
                    <ImageSlider slides={slides}/>
                </div>

            </div>
)}};

export default MainPage;