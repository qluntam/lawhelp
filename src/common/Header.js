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

import { useTranslation, Trans } from "react-i18next";

const HomeLog = () => {
    let { t } = useTranslation('common');

    return (
        <div>
            <a href={t('title.ladURL')} target="_blank">
                <img src={logolad} alt="LAD" className="object-scale-down h-20 mr-8" />
            </a>
        </div>
    );
}

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

        let locale = this.props.locale;
        let location = this.props.location;

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

        let enActive, tcActive, scActive;

        if (locale == 'en') {
            enActive = ' text-lang-bar';
            tcActive = "";
            scActive = "";
        }

        if (locale == 'tc') {
            enActive = '';
            tcActive = " text-lang-bar";
            scActive = "";
        }

        if (locale == 'sc') {
            enActive = '';
            tcActive = "";
            scActive = " text-lang-bar";
        }
        
        return (
            <div className="head">
                <div className={`flex flex-row mb-8 justify-between py-4` + (topBar)}>
                    <div className="flex flex-row ml-8">
                        <div>
                            <HomeLog />
                        </div>
                        <div><img src={logoPath} alt="Fifty" className="object-scale-down h-20" /></div>
                    </div>
                    <div className="text-center mr-4">
                        <ul>
                            <li className={`mb-2 px-7 text-base` + (langClass) + tcActive}>
                                <Link to={`/tc` + this.props.location}>繁體</Link>
                            </li>
                            <li className={`mb-2 px-7 text-base` + (langClass) + scActive}>
                                <Link to={`/sc` + this.props.location}>简体</Link>
                            </li>
                            <li className={`px7 text-base` + (langClass) + enActive}>
                                <Link to={`/en` + this.props.location}>English</Link>
                            </li>
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
                                    <Link to={"/" + locale + "/home"}  onClick={this.showMenu}>
                                        <Trans i18nKey="title.homepage" ns="common"></Trans>
                                    </Link>
                                </li>
                                <li className="my-10 text-lg">
                                    <Link to={"/" + locale + "/director"} onClick={this.showMenu}>
                                        <Trans i18nKey="title.director" ns="common"></Trans>
                                    </Link>
                                </li>
                                <li className="my-10 text-lg">
                                    <Link to={"/" + locale + "/message"} onClick={this.showMenu}>
                                        <Trans i18nKey="title.congrats" ns="common"></Trans>
                                    </Link>
                                </li>
                                <li className="my-10 text-lg">
                                    <Link to={"/" + locale + "/milestone"} onClick={this.showMenu}>
                                        <Trans i18nKey="title.milestone" ns="common"></Trans>
                                    </Link>
                                </li>
                                <li className="my-10 text-lg">
                                    <Link to={"/" + locale + "/events"} onClick={this.showMenu}>
                                        <Trans i18nKey="title.events" ns="common"></Trans>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <nav className={`icon-nav ml-10` + (openingHide)}>
                        <ul>
                            <li className={"nav-now rounded-full h-14 w-14 bg-white flex justify-center items-center mb-3 shadow-xl"}
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
                                <div className="nav-tips text-fsm"><Trans i18nKey="title.menu" ns="common"></Trans></div>
                            </li>
                            <li className={"nav-now rounded-full h-14 w-14 bg-white flex justify-center items-center mb-3 shadow-xl" + ((location == "/home") ? " active" : "")}
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
                                <Link to={"/" + locale + "/home"}
                                
                                >
                                    <img src={((location == "/home") ? homepageHover : homepageIcon)} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm"><Trans i18nKey="title.homepage" ns="common"></Trans></div>
                            </li>
                            <li className={"nav-now rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl" + ((location == "/director") ? " active" : "")}
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
                                <Link to={"/" + locale + "/director"}
                                
                                >
                                    <img src={((location == "/director") ? directorHover : directorIcon)} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm"><Trans i18nKey="title.director" ns="common"></Trans></div>
                            </li>
                            <li className={"nav-now rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl" + ((location == "/message") ? " active" : "")}
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
                                <Link to={"/" + locale + "/message"}
                                
                                >
                                    <img src={((location == "/message") ? msgHover : msgIcon)} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm"><Trans i18nKey="title.congrats" ns="common"></Trans></div>
                            </li>
                            <li className={"nav-now rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl" + ((location == "/milestone") ? " active" : "")}
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
                                <Link to={"/" + locale + "/milestone"}>
                                    <img src={((location == "/milestone") ? milestoneHover : milestoneIcon)} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm"><Trans i18nKey="title.milestone" ns="common"></Trans></div>
                            </li>
                            <li className={"nav-now rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl" + ((location == "/events") ? " active" : "")}
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
                                
                                <Link to={"/" + locale + "/events"}>
                                    <img src={((location == "/events") ? calHover : calIcon)} className="object-scale-down w-10 h-10 m-auto" />
                                </Link>
                                <div className="nav-tips text-fsm"><Trans i18nKey="title.events" ns="common"></Trans></div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
    }

export default Header;