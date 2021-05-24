import pattern from '../assets/images/banner/banner_pattern.png';
import banner from '../assets/images/banner/milestone.jpg';
import pageTitleTC from '../assets/images/banner/tc/milestone-title.png';
import pageTitleSC from '../assets/images/banner/sc/milestone-title.png';
import pageTitleEN from '../assets/images/banner/en/milestone-title.png'; 

import btn1960 from '../assets/images/pages/milestone/btn1960.svg'
import btn1970 from '../assets/images/pages/milestone/btn1970.svg'
import btn1980 from '../assets/images/pages/milestone/btn1980.svg'
import btn1990 from '../assets/images/pages/milestone/btn1990.svg'
import btn2000 from '../assets/images/pages/milestone/btn2000.svg'
import btn2010 from '../assets/images/pages/milestone/btn2010.svg'
import btn2020 from '../assets/images/pages/milestone/btn2020.svg'

import title1960 from '../assets/images/pages/milestone/title1960.svg'
import title1970 from '../assets/images/pages/milestone/title1970.svg'
import title1980 from '../assets/images/pages/milestone/title1980.svg'
import title1990 from '../assets/images/pages/milestone/title1990.svg'
import title2000 from '../assets/images/pages/milestone/title2000.svg'
import title2010 from '../assets/images/pages/milestone/title2010.svg'
import title2020 from '../assets/images/pages/milestone/title2020.svg'

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
import { useTranslation, Trans } from "react-i18next";

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

    const { t, i18n } = useTranslation('milestone');

    let pageTitle, titleClass;
    switch(i18n.language) {
        case "tc":
            pageTitle = pageTitleTC;
            titleClass = ' w-4/12';
            break;
        case "sc":
            pageTitle = pageTitleSC;
            titleClass = ' w-4/12';
            break;
        case "en":
            pageTitle = pageTitleEN;
            titleClass = ' w-5/12';
            break;
    }

    const Milestone = () => {
    return (
        <div>
            <div className="topBar-nav"></div>
            <div className="pattern flex justify-end" style={{ backgroundImage: `url(${pattern})` }}>
                <div className="relative w-4/5 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                    <img src={pageTitle} className={"object-scale-down absolute bottom-0 left-0 ml-3 mb-3" + titleClass} />
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
                        <div><img src={btn2020} /></div>
                    </div>
                    <div ref={y1960} className="years">
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
                                        {t('timelines.timeline1.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                    {t('timelines.timeline1.content')}
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
                                        {t('timelines.timeline2.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                    {t('timelines.timeline2.content')}
                                </div>
                            </div>
                            <div>
                                <img src={Img19670112} />
                            </div>
                        </div>
                    </div>
                    <div ref={y1970} className="years">
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
                                    {t('timelines.timeline3.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline3.content')}
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
                                        1973
                                    </div>
                                    <div className="text-2xl">
                                    {t('timelines.timeline4.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline4.content')}
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
                                    {t('timelines.timeline5.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline5.content')}
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
                                        1978<br />
                                        04.01
                                    </div>
                                    <div className="text-2xl">
                                    {t('timelines.timeline6.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline6.content')}
                                </div>
                            </div>
                            <div>
                                <img src={Img19780401} />
                            </div>
                        </div>
                    </div>
                    <div ref={y1980} className="years">
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
                                    {t('timelines.timeline7.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline7.content')}
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
                                    {t('timelines.timeline8.title')} 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline8.content')}
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
                                    {t('timelines.timeline9.title')} 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline9.content')}
                                </div>
                            </div>
                            <div>
                                <img />
                            </div>
                        </div>

                    </div>

                    <div ref={y1990} className="years">
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
                                    {t('timelines.timeline10.title')} 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline10.content')}
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
                                    {t('timelines.timeline11.title')} 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline11.content')}
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
                                    {t('timelines.timeline12.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline12.content')}
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
                                    {t('timelines.timeline13.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline13.content')}
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
                                    {t('timelines.timeline14.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline14.content')}
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
                                    {t('timelines.timeline15.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline15.content')}
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
                                    {t('timelines.timeline16.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline16.content')}
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
                                    {t('timelines.timeline17.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline17.content')}
                                </div>
                            </div>
                            <div className="flex">
                                <img src={Img1999en} className="w-6/12" /><img src={Img1999zh} className="w-6/12" />
                            </div>
                        </div>
                    </div>

                    <div ref={y2000} className="years">
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
                                    {t('timelines.timeline18.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline18.content')}
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
                                    {t('timelines.timeline19.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline19.content')}
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
                                    {t('timelines.timeline20.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline20.content')}
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
                                    {t('timelines.timeline21.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline21.content')}
                                </div>
                            </div>
                            <div>
                                <img />
                            </div>
                        </div>
                        
                    </div>

                    <div ref={y2010} className="years">
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
                                    {t('timelines.timeline22.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline22.content')}
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
                                    {t('timelines.timeline23.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline23.content')}
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
                                    {t('timelines.timeline24.title')}
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline24.content')}
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
                                    {t('timelines.timeline25.title')} 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline25.content')}
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
                                    {t('timelines.timeline26.title')} 
                                    </div>
                                </div>
                                <div className="content text-justify">
                                {t('timelines.timeline26.content')}
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
