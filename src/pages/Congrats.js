import pattern from '../assets/images/banner/banner_pattern.png';
import banner from '../assets/images/banner/congrats.png';
import directorImg from '../assets/images/pages/director.jpg'; 
import pageTitle from '../assets/images/banner/congrats-title.png'; 

export default function Congrats() {
    return (
        <div>
            <div className="topBar-nav"></div>
            <div className="pattern flex justify-end" style={{ backgroundImage: `url(${pattern})` }}>
                <div className="sub-banner" style={{ backgroundImage: `url(${banner})` }}>
                    <img src={pageTitle} className="object-scale-down w-3/12" />
                </div>
            </div>
            <div className="profile">
                <div>
                    <div className="profileImg"></div>
                    <div>
                        <div className="name">林鄭月娥</div>
                        <div className="subtitle">香港特別行政區行政長官</div>
                    </div>
                </div>
                <div>
                    <div className="profileImg"></div>
                    <div>
                        <div className="name">馬道立</div>
                        <div className="subtitle">終審法院首席法官</div>
                    </div>
                </div>
                <div>
                    <div className="profileImg"></div>
                    <div>
                        <div className="name">張建宗</div>
                        <div className="subtitle">政務司司長</div>
                    </div>
                </div>
                <div>
                    <div className="profileImg"></div>
                    <div>
                        <div className="name">梁永祥博士</div>
                        <div className="subtitle">法律援助服務局主席</div>
                    </div>
                </div>
            </div>
            <div className="wording">
                <div className="section">
                    <div className="item">
                        <div className="title">
                            香港特別行政區行政長官獻辭
                        </div>
                        <div className="content">

                        </div>
                    </div>
                    <div>
                        <div className="profileImg"></div>
                        <div className="name">林鄭月娥</div>
                        <div className="subtitle">香港特別行政區行政長官</div>
                        <div className="signature"></div>
                    </div>
                </div>
                <div className="section">
                    <div className="item">
                        <div className="title">
                            香港特別行政區行政長官獻辭
                        </div>
                        <div className="content">

                        </div>
                    </div>
                    <div>
                        <div className="profileImg"></div>
                        <div className="name">林鄭月娥</div>
                        <div className="subtitle">香港特別行政區行政長官</div>
                        <div className="signature"></div>
                    </div>
                </div>
                <div className="section">
                    <div className="item">
                        <div className="title">
                            香港特別行政區行政長官獻辭
                        </div>
                        <div className="content">

                        </div>
                    </div>
                    <div>
                        <div className="profileImg"></div>
                        <div className="name">林鄭月娥</div>
                        <div className="subtitle">香港特別行政區行政長官</div>
                        <div className="signature"></div>
                    </div>
                </div>
                <div className="section">
                    <div className="item">
                        <div className="title">
                            香港特別行政區行政長官獻辭
                        </div>
                        <div className="content">

                        </div>
                    </div>
                    <div>
                        <div className="profileImg"></div>
                        <div className="name">林鄭月娥</div>
                        <div className="subtitle">香港特別行政區行政長官</div>
                        <div className="signature"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
