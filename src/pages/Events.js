import pattern from '../assets/images/banner/banner_pattern.png';
import banner from '../assets/images/banner/events.jpg';
import pageTitleTC from '../assets/images/banner/tc/events-title.png';
import pageTitleSC from '../assets/images/banner/sc/events-title.png';
import pageTitleEN from '../assets/images/banner/en/events-title.png'; 

import juneTitleTC from '../assets/images/pages/events/tc/june.png'; 
import julyTitleTC from '../assets/images/pages/events/tc/july.png';
import augustTitleTC from '../assets/images/pages/events/tc/august.png'; 
import juneTitleSC from '../assets/images/pages/events/sc/june.png'; 
import julyTitleSC from '../assets/images/pages/events/sc/july.png';
import augustTitleSC from '../assets/images/pages/events/sc/august.png'; 
import juneTitleEN from '../assets/images/pages/events/en/june.png'; 
import julyTitleEN from '../assets/images/pages/events/en/july.png';
import augustTitleEN from '../assets/images/pages/events/en/august.png'; 
import lineBreak from '../assets/images/pages/events/line-break.png'; 
import titleBreak from '../assets/images/pages/events/title-break.png'; 

import React, { useRef } from 'react';
import {
    useLocation
} from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";


export default function Events() {
    const jun = useRef(null)
    const jul = useRef(null)
    const aug = useRef(null)

    const gotoJun = () => jun.current.scrollIntoView()
    const gotoJul = () => jul.current.scrollIntoView()
    const gotoAug = () => aug.current.scrollIntoView()

    let location = useLocation();

    React.useEffect(() => {
        
        if (location.hash == '#jun') {
            gotoJun();
        }
        if (location.hash == '#jul') {
            gotoJul();
        }
        if (location.hash == '#aug') {
            gotoAug();
        }
    });

    const { t, i18n } = useTranslation('events');

    let pageTitle, titleClass;
    let juneTitle, julyTitle, augustTitle;
    switch(i18n.language) {
        case "tc":
            pageTitle = pageTitleTC;
            titleClass = ' w-4/12';
            juneTitle = juneTitleTC;
            julyTitle = julyTitleTC;
            augustTitle = augustTitleTC;
            break;
        case "sc":
            pageTitle = pageTitleSC;
            titleClass = ' w-4/12';
            juneTitle = juneTitleSC;
            julyTitle = julyTitleSC;
            augustTitle = augustTitleSC;
            break;
        case "en":
            pageTitle = pageTitleEN;
            titleClass = ' w-6/12';
            juneTitle = juneTitleEN;
            julyTitle = julyTitleEN;
            augustTitle = augustTitleEN;
            break;
    }

    return (
        <div>
            <div className="topBar-nav"></div>
            <div className="pattern flex justify-end" style={{ backgroundImage: `url(${pattern})` }}>
                <div className="relative  w-full md:w-4/5 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
                    <img src={pageTitle} className={"object-scale-down absolute bottom-0 left-0 ml-3 mb-3" + titleClass} />
                </div>
            </div>
            <div className="mb-40">
                <div ref={jun} className="month mx-24">
                    <div className="my-10">
                        <img src={juneTitle} className="h-20" />
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                        <div className="events">
                            <div className="title text-2xl">
                                {t('june.event1.title')}
                            </div>
                            <div className="seprate my-2">
                                <img src={titleBreak} />
                            </div>
                            <div className="venue text-xl">{t('june.event1.venue')}</div>
                            <div className="date ml-4 mt-6">
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">02</div>
                                    <div className="text-base font-bold mx-4 w-20">(WED)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">16:00 - 18:00</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">03</div>
                                    <div className="text-base font-bold mx-4 w-20">(THU)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">10:00 - 18:00</div>
                                </div>
                                <div className="times flex items-center">
                                    <div className="text-5xl font-bold mx-4 w-20">04</div>
                                    <div className="text-base font-bold mx-4 w-20">(FRI)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">10:00 - 14:00</div>
                                </div>
                            </div>
                        </div>
                        <div className="events">
                            <div className="title text-2xl">
                                {t('june.event2.title')}
                            </div>
                            <div className="seprate my-2">
                            <img src={titleBreak} />
                            </div>
                            <div className="venue text-xl">{t('june.event2.venue')}</div>
                            <div className="date ml-4 mt-6">
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">25</div>
                                    <div className="text-base font-bold mx-4 w-20">(FRI)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">10:00 - 18:00</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">26</div>
                                    <div className="text-base font-bold mx-4 w-20">(SAT)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">10:00 - 18:00</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">27</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">10:00 - 18:00</div>
                                </div>
                            </div>
                        </div>
                        <div className="events">
                            <div className="title text-2xl">
                                {t('june.event3.title')}
                            </div>
                            <div className="seprate my-2">
                            <img src={titleBreak} />
                            </div>
                            <div className="venue text-xl"></div>
                            <div className="date ml-4 mt-6">
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">20</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                            </div>
                        </div>
                        <div className="events">
                            <div className="title text-2xl">
                                {t('june.event4.title')}
                            </div>
                            <div className="seprate my-2">
                            <img src={titleBreak} />
                            </div>
                            <div className="venue text-xl"></div>
                            <div className="date ml-4 mt-6">
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">27</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="my-10">
                    <img src={lineBreak} />
                </div>
                <div ref={jul} className="month mx-24">
                    <div className="my-10">
                        <img src={julyTitle} className="h-20" />
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                        <div className="events">
                            <div className="title text-2xl">
                                {t('july.event1.title')}
                            </div>
                            <div className="seprate my-2">
                            <img src={titleBreak} />
                            </div>
                            <div className="venue text-xl"></div>
                            <div className="date ml-4 mt-6">
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">04</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUL</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">11</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUL</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">18</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUL</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">25</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUL</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <img src={lineBreak} />
                </div>
                <div ref={aug} className="month mx-24">
                    <div className="my-10">
                        <img src={augustTitle} className="h-20" />
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                        <div className="events">
                            <div className="title text-2xl">
                                {t('aug.event1.title')}
                            </div>
                            <div className="seprate my-2">
                            <img src={titleBreak} />
                            </div>
                            <div className="venue text-xl">{t('aug.event1.venue')}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}