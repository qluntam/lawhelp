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
                    <li className="text-2xl mr-9">
                        <Link to="/director">署長前言</Link>
                    </li>
                    <li className="text-2xl mr-9">
                        <Link to="/">賀詞</Link>
                    </li>
                    <li className="text-2xl mr-9">
                        <Link to="/">光輝里程</Link>
                    </li>
                    <li className="text-2xl text-center">活動日程
                        <ul>
                            <li className="text-xl">6月</li>
                            <li className="text-xl">7月</li>
                            <li className="text-xl">8月</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="copyright-social p-10">
                <div className="flex flex-row justify-end mb-4 ">
                    <div><img src={logolad} alt="LAD" className="object-scale-down h-20 mr-8" /></div>
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
                    <div className="text-white my-5">CONTACT ME</div>
                    <div className="text-white my-5">LAD</div>
                    <div className="text-white">Copyright © xxxxxxxxxxxxx. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
}