import pattern from '../assets/images/banner/banner_pattern.png';
import banner from '../assets/images/banner/congrats.png';
import pageTitle from '../assets/images/banner/congrats-title.png'; 

import CLpro from '../assets/images/pages/congrats/clpro.jpg';
import CLNameTitle from '../assets/images/pages/congrats/clnametitle.png';
import CLWord from '../assets/images/pages/congrats/clword.png';
import CLnt from '../assets/images/pages/congrats/clnt.png';
import CLSignZh from '../assets/images/pages/congrats/zh-clsign.png';

import GMpro from '../assets/images/pages/congrats/gmpro.jpg';
import GMNameTitle from '../assets/images/pages/congrats/gmnametitle.png';
import GMWord from '../assets/images/pages/congrats/gmword.png';
import GMnt from '../assets/images/pages/congrats/gmnt.png';
import GMSignZh from '../assets/images/pages/congrats/zh-gmsign.png';

import MCpro from '../assets/images/pages/congrats/mcpro.jpg';
import MCNameTitle from '../assets/images/pages/congrats/mcnametitle.png';
import MCWord from '../assets/images/pages/congrats/mcword.png';
import MCnt from '../assets/images/pages/congrats/mcnt.png';
import MCSignZh from '../assets/images/pages/congrats/zh-mcsign.png';

import WLpro from '../assets/images/pages/congrats/wlpro.jpg';
import WLNameTitle from '../assets/images/pages/congrats/wlnametitle.png';
import WLWord from '../assets/images/pages/congrats/wlword.png';
import WLnt from '../assets/images/pages/congrats/wlnt.png';
import WLSignZh from '../assets/images/pages/congrats/zh-wlsign.png';

import lineBreak from '../assets/images/pages/congrats/line-break.png';

import React, { useRef } from 'react';

export default function Congrats() {
    const CLProfile = useRef(null)
    const GMProfile = useRef(null)
    const MCProfile = useRef(null)
    const WLProfile = useRef(null)
     
    const clSCroll = () => CLProfile.current.scrollIntoView()
    const gmSCroll = () => GMProfile.current.scrollIntoView()
    const mcSCroll = () => MCProfile.current.scrollIntoView()
    const wlSCroll = () => WLProfile.current.scrollIntoView()

    const Congrats = () => {
     
        return (
            <div>
                <div className="topBar-nav"></div>
                <div className="pattern flex justify-end" style={{ backgroundImage: `url(${pattern})` }}>
                    <div className="relative w-4/5 bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
                        <img src={pageTitle} className="object-scale-down w-3/12 absolute bottom-0 left-0 ml-3 mb-3" />
                    </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-5">
                    <div className="flex m-5 cursor-pointer" onClick={clSCroll}>
                        <div className="profileImg">
                            <img src={CLpro} className="w-52" />
                        </div>
                        <div className="mt-5">
                            <img src={CLNameTitle} className="w-96" />
                        </div>
                    </div>
                    <div className="flex m-5 cursor-pointer" onClick={gmSCroll}>
                        <div className="profileImg">
                            <img src={GMpro} className="w-52" />
                        </div>
                        <div className="ml-3 mt-5">
                            <img src={GMNameTitle} className="w-96" />
                        </div>
                    </div>
                    <div className="flex m-5 cursor-pointer" onClick={mcSCroll}>
                        <div className="profileImg">
                            <img src={MCpro} className="w-52" />
                        </div>
                        <div className="mt-5">
                            <img src={MCNameTitle} className="w-96" />
                        </div>
                    </div>
                    <div className="flex m-5 cursor-pointer" onClick={wlSCroll}>
                        <div className="profileImg">
                            <img src={WLpro} className="w-52" />
                        </div>
                        <div className="mt-5">
                            <img src={WLNameTitle} className="w-96" />
                        </div>
                    </div>
                </div>
                <div className="wording">
                    <div className="my-10">
                        <img src={lineBreak} />
                    </div>
                    <a ref={CLProfile} className="section grid grid-cols-5">
                        <div className="col-span-4">
                            <div className="title">
                                <img src={CLWord} className="w-6/12 mt-3 mb-5" />
                            </div>
                            <div className="pr-7 text-justify">
                                <p className="mb-5">今年是法律援助署(法援署)成立五十周年，謹此衷心致賀。香港是一個國際化社會和經濟體，一直以來，法治是我們賴以成功的基石。過去半個世紀，法援署對香港及法治作出了非常重要的貢獻，角色舉足輕重。</p>
                                <p className="mb-5">香港推行的法律援助制度涵蓋全面，在國際間備受推崇。過去五十年，法援署為超過42萬人提供協助，確保香港市民不會因缺乏經濟能力而無法尋求公義。我亦樂見法援署多年來致力擴展服務範圍，並提高法律援助計劃的財務資格限額，積極回應社會不斷轉變的需要。公眾對香港法律援助服務的滿意度一直維持在高水平，工作成績無容置疑。</p>
                                <p className="mb-5">為慶祝成立五十周年，法援署特別舉辦巡迴展覽，回顧法律援助在香港的歷史和發展，內容包括一些重要的法庭裁決，以及這些裁決如何影響政府政策以至整個社會。此外，一連六集的法律援助五十周年電視紀錄特輯，透過不同的法律援助個案，闡述香港的法律發展。</p>
                                <p className="mb-5">法援署亦必定一如以往，與司法機構和法律援助服務局，以及一眾專業團體和其他持份者緊密合作，確保香港繼續以法治為本。</p>
                                <p className="mb-5">再次恭賀法援署邁向五十周年的重要里程碑。我深信在未來五十年，法援署及署內的專業人才定會繼續肩負使命，盡心盡力服務香港。</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img src={CLpro} className="w-12/12 my-4" />
                            <img src={CLnt} className="w-12/12 my-6" />
                            <img src={CLSignZh} className="w-8/12" />
                        </div>
                    </a>
                    <div className="my-10">
                        <img src={lineBreak} />
                    </div>
                    <div ref={GMProfile} className="section grid grid-cols-5">
                        <div className="col-span-4">
                            <div className="title">
                                <img src={GMWord} className="w-6/12 mt-3 mb-5" />
                            </div>
                            <div className="pr-7 text-justify">
                                <p className="mb-5">五十年前，法律援助署開始在香港提供法律援助服務。這展現了香港在昔日以至現今的兩個特色：社會相對繁榮富足，能提供必要的社會服務；以及社會認定尋求司法公義是香港司法制度的主要元素。《基本法》的主要功能之一，是使在香港一直行之有效且有助確保香港未來成就的體制得以延續。體制的其中一環，是沿用原有的法律制度。《基本法》有多項與此相關的條文，當中第三十五條特別訂明「向法院提起訴訟」的權利，也就是現在慣常所指尋求司法公義的權利。第三十五條同時述明香港居民有權得到秘密法律諮詢、有權獲得律師及時保護自己的權益或在法庭上為其代理，以及有權對行政部門的行為提起訴訟。凡此種種都體現於法律援助署的角色及其履行的眾多職能;這是《基本法》第三十五條的規定得以貫徹實現的最佳明證之一。司法公義的質素是衡量法律制度成效的準則。有健全穩當的法援制度，社會便會因此更趨繁榮興旺，而且變得更公正公義。</p>
                                <p className="mb-5">我衷心祝賀法律援助署邁向這重要的里程碑，並期待法律援助署今後繼續成果豐碩，貢獻殊多。</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img src={GMpro} className="w-12/12 my-4" />
                            <img src={GMnt} className="w-12/12 my-6" />
                            <img src={GMSignZh} className="w-8/12" />
                        </div>
                    </div>
                    <div className="my-10">
                        <img src={lineBreak} />
                    </div>
                    <div ref={MCProfile} className="section grid grid-cols-5">
                        <div className="col-span-4">
                            <div className="title">
                                <img src={MCWord} className="w-6/12 mt-3 mb-5" />
                            </div>
                            <div className="pr-7 text-justify">
                                <p className="mb-5">欣逢法律援助署成立五十周年，謹致熱烈賀忱。</p>
                                <p className="mb-5">香港特別行政區政府堅守法治，而法律援助服務是香港法律制度的重要一環，以確保需要法律協助的人士不會因為經濟困難而無法訴諸司法。</p>
                                <p className="mb-5">香港的法律援助制度全面、穩健、經費充足，在全球名列前茅。法律援助署在維護本港法治和公義方面，一直擔當着重要的角色。自一九七零年成立以來，該署一直為有理據提出訴訟或抗辯而欠缺經濟能力的人士，提供可靠和優質的法律援助服務，以確保他們不會因經濟問題而無法尋求公義。</p>
                                <p className="mb-5">法律援助署與時並進，五十年來不斷擴展服務，除擴大民事及刑事法援範圍外，還推出普通法援計劃和法援輔助計劃。每年平均超過八千人受惠於法援服務。在香港法院每年處理的刑事案件中，逾八成被告獲得法援服務。</p>
                                <p className="mb-5">展望將來，我深信法律援助署定必繼續與社會各界並肩攜手，確保香港法援制度一如以往，效率與效益兼備。</p>
                                <p className="mb-5">際此金禧之慶，謹向法律援助署全體人員衷心致意，感謝他們多年來努力不懈。我亦祝願該署工作穩步向前，繼續服務市民，貢獻社會。</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img src={MCpro} className="w-12/12 my-4" />
                            <img src={MCnt} className="w-12/12 my-6" />
                            <img src={MCSignZh} className="w-8/12" />
                        </div>
                    </div>
                    <div className="my-10">
                        <img src={lineBreak} />
                    </div>
                    <div ref={WLProfile} className="section grid grid-cols-5 mb-10">
                        <div className="col-span-4">
                            <div className="title">
                                <img src={WLWord} className="w-6/12 mt-3 mb-5" />
                            </div>
                            <div className="pr-7 text-justify">
                                <p className="mb-5">今年是香港特別行政區法律援助署(法援署)成立五十周年，我謹致以衷心祝賀。</p>
                                <p className="mb-5">自一九七零年成立以來，法援署一直擔當著重要的角色，致力為缺乏經濟能力的人士提供法援服務，伸張正義。為了配合不斷轉變的社會需要，法援署除了積極擴大法援服務的涵蓋範圍外，亦努力推出不同形式的電子系統推廣法援服務，協助有意申請法援的人士提交預辦申請所需資料，及更快捷地處理法援申請，成績令人鼓舞。這些進步全賴法援署內每位同事竭誠盡心的服務。 </p>
                                <p className="mb-5">我誠摯祝願法援署在未來五十年或以後續創佳績。本局定必繼續與法援署攜手合作，竭盡所能確保市民可尋求公義，以助維護和鞏固香港的法治精神。 </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <img src={WLpro} className="w-12/12 my-4" />
                            <img src={WLnt} className="w-12/12 my-6" />
                            <img src={WLSignZh} className="w-8/12" />
                        </div>
                    </div>
                </div>
            </div>
        )
     }
     

    return (
        <div>
            <Congrats />
        </div>
    );
}
