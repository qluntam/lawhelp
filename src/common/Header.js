import nav from '../assets/images/icons/nav.svg';
import homepage from '../assets/images/icons/homepage.svg';
import director from '../assets/images/icons/director.svg';
import msg from '../assets/images/icons/msg.svg';
import milestone from '../assets/images/icons/milestone.svg';
import cal from '../assets/images/icons/cal.svg';

import navHover from '../assets/images/icons/nav-hover.svg';
import homepageHover from '../assets/images/icons/homepage-hover.svg';
import directorHover from '../assets/images/icons/director-hover.svg';
import msgHover from '../assets/images/icons/msg-hover.svg';
import milestoneHover from '../assets/images/icons/milestone-hover.svg';
import calHover from '../assets/images/icons/cal-hover.svg';

import close from '../assets/images/icons/close.svg';

import logolad from '../assets/images/header/logo-lad.png';
import logofifty from '../assets/images/header/logo-fifty.png';
import logofiftyWhite from '../assets/images/header/logo-fifty-white.png';
import React from 'react';
import {
    Link
} from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        navLayer : ' hidden',
        navIcon: nav,
        homepageIcon: homepage,
        directorIcon: director,
        msgIcon: msg,
        milestoneIcon: milestone,
        calIcon: cal,
      };
  
      // This binding is necessary to make `this` work in the callback
      this.showMenu = this.showMenu.bind(this);
      //this.changeLook = this.changeLook.bind(this);

      //console.log(this.props.type);

      
      
    }

    showMenu() {
        this.setState((state) => {
            if (state.navLayer == ' hidden') {
                return {navLayer: ''};
            } else {
                return {navLayer: ' hidden'};
            }
        });
    }

    render() {
        const {navLayer, navIcon,homepageIcon, directorIcon, msgIcon, milestoneIcon, calIcon
        } = this.state;

        let langClass = ' text-primary hover:text-lang-bar';
        let openingHide = '';
        let logoPath = logofifty;
        let topBar = '';

        if (this.props.type == 'sub') {
            langClass = ' text-primary hover:text-lang-bar';
            topBar = ' bg-white';
        }
    
        if (this.props.type == 'opening') {
            langClass = ' text-white';
            openingHide =  ' hidden';
            logoPath = logofiftyWhite;
        }
        
        return (
            <div className="head">
                <div className={`flex flex-row mb-8 justify-between py-4` + (topBar)}>
                    <div className="flex flex-row ml-8">
                        <div><img src={logolad} alt="LAD" className="object-scale-down h-28 mr-8" /></div>
                        <div><img src={logoPath} alt="Fifty" className="object-scale-down h-28" /></div>
                    </div>
                    <div className="text-center mr-4 mt-5">
                        <ul>
                            <li className={`mb-3 px7 text-base` + (langClass)}>English</li>
                            <li className={`px-7 text-base` + (langClass)}>簡體</li>
                        </ul>
                    </div>
                </div>
                <div className="relative">
                    <div className={`icon-layer w-64 absolute` + navLayer}>
                        <nav className="text-center">
                            <ul>
                                <li className="my-10 text-2xl">
                                    <div className="cursor-pointer" onClick={this.showMenu}>
                                        <img src={close} className="object-scale-down w-10 h-10 m-auto" />
                                    </div>
                                </li>
                                <li className="my-10 text-lg">
                                    <Link to="/"  onClick={this.showMenu}>
                                    首頁
                                    </Link>
                                </li>
                                <li className="my-10 text-lg">
                                    <Link to="/director" onClick={this.showMenu}>
                                    署長前言
                                    </Link>
                                </li>
                                <li className="my-10 text-lg">
                                    <Link to="/" onClick={this.showMenu}>
                                    賀詞
                                    </Link>
                                </li>
                                <li className="my-10 text-lg">
                                    <Link to="/" onClick={this.showMenu}>
                                    光輝里程
                                    </Link>
                                </li>
                                <li className="my-10 text-lg">
                                    <Link to="/" onClick={this.showMenu}>
                                    活動日程
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <nav className={`icon-nav ml-10` + (openingHide)}>
                        <ul>
                            <li className="nav-now rounded-full h-14 w-14 bg-white flex justify-center items-center mb-3 shadow-xl"
                            onMouseEnter={
                                () => {
                                    this.setState({
                                        navIcon: navHover
                                    })
                                }
                            } 
                            onMouseLeave={
                                () => {
                                    this.setState({
                                        navIcon: nav
                                    })
                                }
                            } 
                            >
                                <div className="cursor-pointer" onClick={this.showMenu} 
                                
                                >
                                    <img src={navIcon} className="object-scale-down w-10 h-10 m-auto" />
                                </div>
                                <div className="nav-tips text-fsm">Menu</div>
                            </li>
                            <li className="nav-now rounded-full h-14 w-14 bg-white flex justify-center items-center mb-3 shadow-xl"
                            onMouseEnter={
                                () => {
                                    this.setState({
                                        homepageIcon: homepageHover
                                    })
                                }
                            } 
                            onMouseLeave={
                                () => {
                                    this.setState({
                                        homepageIcon: homepage
                                    })
                                }
                            } 
                            >
                                <Link to="/"
                                
                                >
                                    <img src={homepageIcon} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm">首頁</div>
                            </li>
                            <li className="nav-now rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl"
                            onMouseEnter={
                                () => {
                                    this.setState({
                                        directorIcon: directorHover
                                    })
                                }
                            } 
                            onMouseLeave={
                                () => {
                                    this.setState({
                                        directorIcon: director
                                    })
                                }
                            } 
                            >
                                <Link to="/director"
                                
                                >
                                    <img src={directorIcon} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm">署長前言</div>
                            </li>
                            <li className="nav-now rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl"
                            onMouseEnter={
                                () => {
                                    this.setState({
                                        msgIcon: msgHover
                                    })
                                }
                            } 
                            onMouseLeave={
                                () => {
                                    this.setState({
                                        msgIcon: msg
                                    })
                                }
                            } 
                            >
                                <Link to="/"
                                
                                >
                                    <img src={msgIcon} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm">賀詞</div>
                            </li>
                            <li className="nav-now rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl"
                            onMouseEnter={
                                () => {
                                    this.setState({
                                        milestoneIcon: milestoneHover
                                    })
                                }
                            } 
                            onMouseLeave={
                                () => {
                                    this.setState({
                                        milestoneIcon: milestone
                                    })
                                }
                            } 
                            >
                                <Link to="/"
                                
                                >
                                    <img src={milestoneIcon} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm">光輝里程</div>
                            </li>
                            <li className="nav-now rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl"
                            onMouseEnter={
                                () => {
                                    this.setState({
                                        calIcon: calHover
                                    })
                                }
                            } 
                            onMouseLeave={
                                () => {
                                    this.setState({
                                        calIcon: cal
                                    })
                                }
                            }
                            >
                                <Link to="/"
                                
                                >
                                    <img src={calIcon} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm">活動日程</div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
    }

export default Header;