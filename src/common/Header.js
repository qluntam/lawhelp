import nav from '../assets/images/icons/nav.svg';
import homepage from '../assets/images/icons/homepage.svg';
import director from '../assets/images/icons/director.svg';
import msg from '../assets/images/icons/msg.svg';
import milestone from '../assets/images/icons/milestone.svg';
import cal from '../assets/images/icons/cal.svg';

import logolad from '../assets/images/header/logo-lad.png';
import logofifty from '../assets/images/header/logo-fifty.png';

import {
    Link
} from "react-router-dom";

export default function Header() {
    let langClass = '';
    return (
        <div className="head">
            <div className="flex flex-row mb-8 justify-between mt-4">
                <div className="flex flex-row ml-8">
                    <div><img src={logolad} alt="LAD" className="object-scale-down h-28 mr-8" /></div>
                    <div><img src={logofifty}  alt="Fifty" className="object-scale-down h-28" /></div>
                </div>
                <div className="text-center mr-8">
                    <ul>
                        <li className={`text-primary mb-3 text-xl` + (langClass)}>English</li>
                        <li className={`text-primary text-xl` + (langClass)}>簡體</li>
                    </ul>
                </div>
            </div>
            <nav className="ml-10">
                <ul>
                    <li className="rounded-full h-14 w-14 bg-white flex justify-center items-center mb-3 shadow-xl">
                        <Link to="/">
                            <img src={nav} className="object-scale-down w-10 h-10 m-auto" />
                        </Link>
                    </li>
                    <li className="rounded-full h-14 w-14 bg-white flex justify-center items-center mb-3 shadow-xl">
                        <Link to="/">
                            <img src={homepage} className="object-scale-down w-10 h-10 m-auto" />
                        </Link>
                    </li>
                    <li className="rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl">
                        <Link to="/director">
                            <img src={director} className="object-scale-down w-10 h-10 m-auto" />
                        </Link>
                    </li>
                    <li className="rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl">
                        <Link to="/">
                            <img src={msg} className="object-scale-down w-10 h-10 m-auto" />
                        </Link>
                    </li>
                    <li className="rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl">
                        <Link to="/">
                            <img src={milestone} className="object-scale-down w-10 h-10 m-auto" />
                        </Link>
                    </li>
                    <li className="rounded-full h-14 w-14 bg-white flex justify-center  items-center mb-3 shadow-xl">
                        <Link to="/">
                            <img src={cal} className="object-scale-down w-10 h-10 m-auto" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}