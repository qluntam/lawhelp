import fb from '../assets/images/icons/fb.svg';
import ig from '../assets/images/icons/ig.svg';
import yt from '../assets/images/icons/yt.svg';

import logolad from '../assets/images/header/logo-lad.png';
import logofiftyWhite from '../assets/images/header/logo-fifty-white.png';

import {
    Link
} from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer grid  grid-cols-3">
            <div className="sitemap col-span-2 py-10 pl-20 text-fsm">
                <div className="heading text-2xl font-bold mb-2">
                    網頁指南
                </div>
                <ul className="flex flex-row">
                    <li className="text-2xl mr-9 hover:text-white">
                        <Link to="/director">署長前言</Link>
                    </li>
                    <li className="text-2xl mr-9 hover:text-white">
                        <Link to="/congrats">賀詞</Link>
                    </li>
                    <li className="text-2xl mr-9 hover:text-white">
                        <Link to="/milestone">光輝里程</Link>
                    </li>
                    <li className="text-2xl text-center">
                        <div className="hover:text-white">
                            <Link to="/events">活動日程</Link>
                        </div>
                        <ul>
                            <li className="text-xl hover:text-white">
                                <Link to="/events#jun">6月</Link>
                            </li>
                            <li className="text-xl hover:text-white"><Link to="/events#jul">7月</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="copyright-social p-10">
                <div className="flex flex-row justify-end mb-4 ">
                    <div><a href="https://www.lad.gov.hk/chi/home/home.html" target="_blank"><img src={logolad} alt="LAD" className="object-scale-down h-20 mr-8" /></a></div>
                    <div><img src={logofiftyWhite} alt="Fifty" className="object-scale-down h-20" /></div>
                </div>
                <div className="social-logo flex justify-end">
                    <div className="fb-logo mr-2">
                        <img src={fb} alt="Facebook" width="30" />
                    </div>
                    <div className="ig-logo mr-2">
                        <img src={ig} alt="Instagram" width="30" />
                    </div>
                    <div className="yt-logo">
                        <img src={yt} alt="Youtube" width="30" />
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-white my-5">
                        <a href="https://www.lad.gov.hk/chi/home/contact.html" target="_blank">CONTACT ME</a>
                    </div>
                    <div className="text-white">Copyright © 2021 Legal Aid Department.<br />All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
}