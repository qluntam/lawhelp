import pattern from '../assets/images/banner/banner_pattern.png';
import banner from '../assets/images/banner/milestone.jpg';
import pageTitle from '../assets/images/banner/milestone-title.png'; 

import btn1960 from '../assets/images/pages/milestone/btn1960.png'
import btn1970 from '../assets/images/pages/milestone/btn1970.png'
import btn1980 from '../assets/images/pages/milestone/btn1980.png'
import btn1990 from '../assets/images/pages/milestone/btn1990.png'
import btn2000 from '../assets/images/pages/milestone/btn2000.png'
import btn2010 from '../assets/images/pages/milestone/btn2010.png'

import title1960 from '../assets/images/pages/milestone/title1960.png'
import title1970 from '../assets/images/pages/milestone/title1970.png'
import title1980 from '../assets/images/pages/milestone/title1980.png'
import title1990 from '../assets/images/pages/milestone/title1990.png'
import title2000 from '../assets/images/pages/milestone/title2000.png'
import title2010 from '../assets/images/pages/milestone/title2010.png'

import Img19661123 from '../assets/images/pages/milestone/1966.11.23.jpg'
import Img19670112 from '../assets/images/pages/milestone/1967.01.12.jpg'
import Img1978 from '../assets/images/pages/milestone/1978.jpg'
import Img19780401 from '../assets/images/pages/milestone/1978.04.01.jpg'
import Img19820423 from '../assets/images/pages/milestone/1982.04.23.png'
import Img19910801 from '../assets/images/pages/milestone/1991.08.01.png'
import Img19960901 from '../assets/images/pages/milestone/1996.09.01.png'
import Img199710 from '../assets/images/pages/milestone/1997.10.png'
import Img199711 from '../assets/images/pages/milestone/1997.11.jpg'
import Img199810 from '../assets/images/pages/milestone/1998.10.jpg'
import Img1999en from '../assets/images/pages/milestone/1999-en.png'
import Img1999zh from '../assets/images/pages/milestone/1999-zh.png'
import Img200503 from '../assets/images/pages/milestone/2005.03.jpg'
import Img2006 from '../assets/images/pages/milestone/2006.jpg'
import Img20081 from '../assets/images/pages/milestone/2008-1.png'
import Img20082 from '../assets/images/pages/milestone/2008-2.png'
import Img20083 from '../assets/images/pages/milestone/2008-3.png'
import Img201203 from '../assets/images/pages/milestone/2012.03.jpg'
import Img2015 from '../assets/images/pages/milestone/2015.jpg'

import React, { useRef } from 'react';


export default function Milestone() {
    const y1960 = useRef(null)
    const y1970 = useRef(null)
    const y1980 = useRef(null)
    const y1990 = useRef(null)
    const y2000 = useRef(null)
    const y2010 = useRef(null)
     
    const btnY1960 = () => y1960.current.scrollIntoView()
    const btnY1970 = () => y1970.current.scrollIntoView()
    const btnY1980 = () => y1980.current.scrollIntoView()
    const btnY1990 = () => y1990.current.scrollIntoView()
    const btnY2000 = () => y2000.current.scrollIntoView()
    const btnY2010 = () => y2010.current.scrollIntoView()

    const Milestone = () => {
    return (
        <div>
            <div className="topBar-nav"></div>
            <div className="pattern flex justify-end" style={{ backgroundImage: `url(${pattern})` }}>
                <div className="relative w-4/5 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                    <img src={pageTitle} className="object-scale-down w-4/12 absolute bottom-0 left-0 ml-3 mb-3" />
                </div>
            </div>
            <div className="grid grid-cols-7">
                <div></div>
                <div className="col-span-6">
                    <div className="flex justify-end">
                        <div onClick={btnY1960} className="cursor-pointer"><img src={btn1960} /></div>
                        <div onClick={btnY1970} className="cursor-pointer"><img src={btn1970} /></div>
                        <div onClick={btnY1980} className="cursor-pointer"><img src={btn1980} /></div>
                        <div onClick={btnY1990} className="cursor-pointer"><img src={btn1990} /></div>
                        <div onClick={btnY2000} className="cursor-pointer"><img src={btn2000} /></div>
                        <div onClick={btnY2010} className="cursor-pointer"><img src={btn2010} /></div>
                    </div>
                    <div ref={y1960} className="years mb-40">
                        <div>
                            <img src={title1960} className="w-3/12"/>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-5">
                                    <div className="text-5xl font-bold mr-10">
                                        1966<br />
                                        11.23
                                    </div>
                                    <div className="text-2xl">
                                        《法律援助條例》
                                    </div>
                                </div>
                                <div className="content text-justify">
                                    《法律援助條例》通過，除襲擊和毆打案件外，法援計劃涵蓋幾乎所有在
                                    合議庭、最高法院及地方法院審理的民事訴訟。法援計劃並沒有為經費設
                                    定預算上限，申請者須接受案情審查和經濟審查。
                                </div>
                            </div>
                            <div>
                                <img src={Img19661123} />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-5">
                                    <div className="text-5xl font-bold mr-10">
                                        1967<br />
                                        01.12
                                    </div>
                                    <div className="text-2xl">
                                    法援計劃投入運作
                                    </div>
                                </div>
                                <div className="content text-justify">
                                    在司法機構開設一個名為法律援助組的附屬部門，標誌著法律援助計劃正式投入運作。
                                </div>
                            </div>
                            <div>
                                <img src={Img19670112} />
                            </div>
                        </div>
                    </div>
                    <div ref={y1970} className="years mb-40">
                        <div>
                            <img src={title1970} className="w-3/12"/>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1970<br />
                                        07.01
                                    </div>
                                    <div className="text-2xl">
                                    正式成立
                                    </div>
                                </div>
                                <div className="content text-justify">
                                    法律援助署(法援署)正式成立，並遷往位於 炮台里、俗稱「紅磚屋」的前法國外方傳道會 大樓。 
                                </div>
                            </div>
                            <div>
                                <img  />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1973
                                    </div>
                                    <div className="text-2xl">
                                    訴訟組成立
                                    </div>
                                </div>
                                <div className="content text-justify">
                                成立訴訟組，並於德己立街設立臨時辦事處。 
                                </div>
                            </div>
                            <div>
                                <img />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1978
                                    </div>
                                    <div className="text-2xl">
                                    設立九龍分署
                                    </div>
                                </div>
                                <div className="content text-justify">
                                法援署於旺角彌敦道麗斯大厦設立分署，在接收和處理民事法援申請方面，為申請者提供方便的選擇。九龍分署於1991年遷往旺角政府合署現址。
                                </div>
                            </div>
                            <div>
                                <img src={Img1978} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1978<br />
                                        04.01
                                    </div>
                                    <div className="text-2xl">
                                    擴大刑事法援範圍
                                    </div>
                                </div>
                                <div className="content text-justify">
                                修訂《刑事案件法律援助規則》，所有於地方法院審訊的刑事案件均列入法援範圍。
                                </div>
                            </div>
                            <div>
                                <img src={Img19780401} />
                            </div>
                        </div>
                    </div>
                    <div ref={y1980} className="years mb-40">
                        <div>
                            <img src={title1980} className="w-3/12"/>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1982<br />
                                        04.23
                                    </div>
                                    <div className="text-2xl">
                                    涵蓋樞密院
                                    </div>
                                </div>
                                <div className="content text-justify">
                                法律援助擴大至涵蓋上訴到英國樞密院的案件。 
                                </div>
                            </div>
                            <div>
                                <img src={Img19820423} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1984<br />
                                        01.01
                                    </div>
                                    <div className="text-2xl">
                                        擴大刑事法援 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                刑事法援擴大至包括在裁判司署進行的交付審判程序。
                                </div>
                            </div>
                            <div>
                                <img />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1984<br />
                                        10.01
                                    </div>
                                    <div className="text-2xl">
                                        法律援助輔助計劃 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                    推行法律援助輔助計劃，為未能通過經濟審查但有合理理據提出申索，而財政資源又未能負擔高昂訴訟費用的人士提供協助。該計劃為全球首個以訴訟結果決定收費的法律援助計劃，並於1990年代轉為自負盈虧營運。 
                                </div>
                            </div>
                            <div>
                                <img />
                            </div>
                        </div>

                    </div>

                    <div ref={y1990} className="years mb-40">
                        <div>
                            <img src={title1990} className="w-3/12"/>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1991<br />
                                        08.01
                                    </div>
                                    <div className="text-2xl">
                                        法定代表律師條例
                                    </div>
                                </div>
                                <div className="content text-justify">
                                《法定代表律師條例》通過，由法律援助署署長出任首位法定代表律師，在訴訟中代表法律上無行為能力(即未滿18歲或精神上無行為能力)的人士的利益。 
                                </div>
                            </div>
                            <div>
                                <img src={Img19910801} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1992<br />
                                        07.01
                                    </div>
                                    <div className="text-2xl">
                                    更公平機制
                                    </div>
                                </div>
                                <div className="content text-justify">
                                《1991年法律援助(修訂)條例》生效，以「經濟能力」作為經濟審查的單一準則，取代以可動用收入和可動用資產作為審查標準，為只有入息或只有資產的申請者提供更公平的審查機制。
                                </div>
                            </div>
                            <div>
                                <img className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1995<br />
                                        07.28
                                    </div>
                                    <div className="text-2xl">
                                    進一步支援
                                    </div>
                                </div>
                                <div className="content text-justify">
                                《1995年法律援助(修訂)條例》生效，若申請者依據《香港人權法案條例》和《公民權利和政治權利國際公約》適用於香港的規定而提出合理理據的申索，法援署署長可酌情免除其財務資源審查的限額。 
                                </div>
                            </div>
                            <div>
                                <img className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1996<br />
                                        09.01
                                    </div>
                                    <div className="text-2xl">
                                    法律援助服務局
                                    </div>
                                </div>
                                <div className="content text-justify">
                                法律援助服務局正式成立，負責監管由法律援助署提供的法律援助服務，並就法律援助政策向政府提供意見。 
                                </div>
                            </div>
                            <div>
                                <img src={Img19960901} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1997<br />
                                        10
                                    </div>
                                    <div className="text-2xl">
                                    法援署網頁
                                    </div>
                                </div>
                                <div className="content text-justify">
                                推出網頁，方便公眾於網上獲得法援署的資訊。  
                                </div>
                            </div>
                            <div>
                                <img src={Img199710} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1997<br />
                                        11
                                    </div>
                                    <div className="text-2xl">
                                    服務承諾
                                    </div>
                                </div>
                                <div className="content text-justify">
                                公布審批申請所需時間的服務承諾，同年亦發表「抱負、使命及信念」的聲明。其後，於1999年進一步公布有關付款安排的服務承 諾。
                                </div>
                            </div>
                            <div>
                                <img src={Img199711} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1998<br />
                                        10
                                    </div>
                                    <div className="text-2xl">
                                    全新小冊子
                                    </div>
                                </div>
                                <div className="content text-justify">
                                出版《香港法律援助服務指南》小冊子。
                                </div>
                            </div>
                            <div>
                                <img src={Img199810} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        1999<br />
                                        10
                                    </div>
                                    <div className="text-2xl">
                                    加強公眾認識
                                    </div>
                                </div>
                                <div className="content text-justify">
                                推出題材廣泛的小冊子，以加強公眾對法援署服務的認識，包括怎樣申請法援、法律援助訴訟的分擔費及法援署署長的第一押記。
                                </div>
                            </div>
                            <div className="flex">
                                <img src={Img1999en} className="w-6/12" /><img src={Img1999zh} className="w-6/12" />
                            </div>
                        </div>
                    </div>

                    <div ref={y2000} className="years mb-40">
                        <div>
                            <img src={title2000} className="w-3/12"/>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        2005<br />
                                        03
                                    </div>
                                    <div className="text-2xl">
                                    調解試驗計劃
                                    </div>
                                </div>
                                <div className="content text-justify">
                                推行「法援婚姻訴訟個案家事調解試驗計劃」。
                                </div>
                            </div>
                            <div>
                                <img src={Img200503} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        2006
                                    </div>
                                    <div className="text-2xl">
                                    市場機制
                                    </div>
                                </div>
                                <div className="content text-justify">
                                根據《法律援助(財產的押記)(利率) 規例》，法援署署長第一押記的利率每 年會隨市場走勢而變動，而非如以往般 把年息率固定為10%。 
                                </div>
                            </div>
                            <div>
                                <img src={Img2006} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        2008 
                                    </div>
                                    <div className="text-2xl">
                                    關注不同族裔的需要
                                    </div>
                                </div>
                                <div className="content text-justify">
                                出版不同族裔語言的法律援助服務小冊子。
                                </div>
                            </div>
                            <div className="flex">
                                <img src={Img20081} className="w-4/12" />
                                <img src={Img20082} className="w-4/12" />
                                <img src={Img20083} className="w-4/12" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        2008 
                                    </div>
                                    <div className="text-2xl">
                                    網上預辦申請
                                    </div>
                                </div>
                                <div className="content text-justify">
                                推出法律援助電子服務入門網站，供申 請者於網上提交預辦申請所需資料。 
                                </div>
                            </div>
                            <div>
                                <img />
                            </div>
                        </div>
                        
                    </div>

                    <div ref={y2010} className="years mb-40">
                        <div>
                            <img src={title2010} className="w-3/12"/>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        2011<br />
                                        05.18
                                    </div>
                                    <div className="text-2xl">
                                    提高限額
                                    </div>
                                </div>
                                <div className="content text-justify">
                                普通法律援助計劃的財務資格限額由 175,800港元調高至260,000港元; 法律援助輔助計劃的財務資格限額，則由 488,400港元調高至1,300,000港元。
                                </div>
                            </div>
                            <div>
                                <img className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                    2012 
                                    </div>
                                    <div className="text-2xl">
                                    擴大專業疏忽申索的範圍
                                    </div>
                                </div>
                                <div className="content text-justify">
                                擴大法律援助輔助計劃範圍，新增8項專業疏 忽的申索、保險人或其中介人在銷售個人保 險產品時涉及疏忽的申索、就售賣一手住宅 物業向賣方提出的金錢申索、以及在針對勞 資審裁處所作裁決而提出的上訴中，為僱員 提供法律代表。 
                                </div>
                            </div>
                            <div>
                                <img className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        2012<br />
                                        03
                                    </div>
                                    <div className="text-2xl">
                                    改善刑事法律援助的付費結構
                                    </div>
                                </div>
                                <div className="content text-justify">
                                改善刑事法律援助的付費結構，包括律師聆訊前的工作按 時計酬，以及會議費用按時數付予律師。此外，個別案件 的分類和相關費用，以及所需準備時間，會經事先評估， 並在外判個案時註明報聘費。 
                                </div>
                            </div>
                            <div>
                                <img src={Img201203} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        2015
                                    </div>
                                    <div className="text-2xl">
                                    更多繳款方式 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                受助人和公眾可使用自動櫃員機提款卡或信 用卡在自動櫃員機向法援署繳付款項，或使 用網上銀行服務繳款，能讓受助人和公眾 更方便地繳付款項。 
                                </div>
                            </div>
                            <div>
                                <img src={Img2015} className="mx-auto" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 my-10">
                            <div className="col-span-2 mr-5">
                                <div className="flex items-center my-10">
                                    <div className="text-5xl font-bold mr-5">
                                        2018
                                    </div>
                                    <div className="text-2xl">
                                    加強電子通訊 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                推出電子預約系統，讓公眾可通過本署網頁進 入法律援助電子服務入門網站，預約索取與申 請有關的表格及文件。由2019年起，電子預 約系統更可支援流動裝置。 
                                </div>
                            </div>
                            <div>
                                <img  className="mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

    return (
        <div>
            <Milestone />
        </div>
    );
}
