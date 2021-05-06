import nav from '../assets/images/icons/nav.svg';
import homepage from '../assets/images/icons/homepage.svg';
import director from '../assets/images/icons/director.svg';
import msg from '../assets/images/icons/msg.svg';
import milestone from '../assets/images/icons/milestone.svg';
import cal from '../assets/images/icons/cal.svg';

import logolad from '../assets/images/header/logo-lad.png';
import logofifty from '../assets/images/header/logo-fifty.png';

export default function Header() {
    return (
        <div class="head">
            <div class="upper-part flex flex-row">
                <div class="logo flex flex-row">
                    <div><img src={logolad} alt="LAD" width="54" /></div>
                    <div><img src={logofifty}  alt="Fifty" width="118" /></div>
                </div>
                <div class="lang-bar">
                    <ul>
                        <li>English</li>
                        <li>簡體</li>
                    </ul>
                </div>
            </div>
            <nav class="top-menu">
                <ul>
                    <li>
                        <img src={nav} />
                    </li>
                    <li>
                        <img src={homepage} />
                    </li>
                    <li>
                        <img src={director} />
                    </li>
                    <li>
                        <img src={msg} />
                    </li>
                    <li>
                        <img src={milestone} />
                    </li>
                    <li>
                        <img src={cal} />
                    </li>
                </ul>
            </nav>
        </div>
    );
}