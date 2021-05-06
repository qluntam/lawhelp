import fb from '../assets/images/icons/fb.svg';
import ig from '../assets/images/icons/ig.svg';
import yt from '../assets/images/icons/yt.svg';

export default function Footer() {
    return (
        <div class="footer grid  grid-cols-3">
            <div class="sitemap col-span-2">
                <div class="heading">
                    網頁指南
                </div>
                <ul class=" flex flex-row">
                    <li>署鍳前言</li>
                    <li>賀詞</li>
                    <li>光輝里程</li>
                    <li>活動日程
                        <ul>
                            <li>6月</li>
                            <li>7月</li>
                            <li>8月</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="copyright-social">
                <div class="social-logo flex justify-end">
                    <div class="fb-logo">
                        <img src={fb} alt="Facebook" width="30" />
                    </div>
                    <div class="ig-logo">
                        <img src={ig} alt="Instagram" width="30" />
                    </div>
                    <div class="yt-logo">
                        <img src={yt} alt="Youtube" width="30" />
                    </div>
                </div>
                <div class="text-right">
                    <div>CONTACT ME</div>
                    <div>LAD</div>
                    <div>Copyright © xxxxxxxxxxxxx. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
}