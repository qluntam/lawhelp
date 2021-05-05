export default function Footer() {
    return (
        <div class="footer grid  grid-cols-3">
            <div class="sitemap col-span-2">
                <div class="heading">
                    網頁指南
                </div>
                <ul>
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
                <div class="social-logo">
                    <div class="fb-logo"></div>
                    <div class="ig-logo"></div>
                    <div class="yb-logo"></div>
                </div>
                <div>
                    <div>CONTACT ME</div>
                    <div>LAD</div>
                    <div>Copyright © xxxxxxxxxxxxx. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
}