import pattern from '../assets/images/banner/banner_pattern.png';
import banner from '../assets/images/banner/events.jpg';
import pageTitle from '../assets/images/banner/events-title.png'; 

import juneTitle from '../assets/images/pages/events/june.png'; 
import julyTitle from '../assets/images/pages/events/july.png'; 
import lineBreak from '../assets/images/pages/events/line-break.png'; 
import titleBreak from '../assets/images/pages/events/title-break.png'; 

import React, { useRef } from 'react';
import {
    useLocation
} from "react-router-dom";


export default function Events() {
    const jun = useRef(null)
    const jul = useRef(null)

    const gotoJun = () => jun.current.scrollIntoView()
    const gotoJul = () => jul.current.scrollIntoView()

    let location = useLocation();

    React.useEffect(() => {
        
        if (location.hash == '#jun') {
            gotoJun();
        }
        if (location.hash == '#jul') {
            gotoJul();
        }
    });

    return (
        <div>
            <div className="topBar-nav"></div>
            <div className="pattern flex justify-end" style={{ backgroundImage: `url(${pattern})` }}>
                <div className="relative w-4/5 bg-no-repeat" style={{ backgroundImage: `url(${banner})` }}>
                    <img src={pageTitle} className="object-scale-down w-5/12 absolute bottom-0 left-0 ml-3 mb-3" />
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
                                法律援助署五十周年巡迴展覽 - 第一場
                            </div>
                            <div className="seprate my-2">
                                <img src={titleBreak} />
                            </div>
                            <div className="venue text-xl">香港大會堂低座展覽廳</div>
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
                                法律援助署五十周年巡迴展覽 - 第二場
                            </div>
                            <div className="seprate my-2">
                            <img src={titleBreak} />
                            </div>
                            <div className="venue text-xl">油塘大本型中庭</div>
                            <div className="date ml-4 mt-6">
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">25</div>
                                    <div className="text-base font-bold mx-4 w-20">(FRI)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">11:00 - 18:00</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">26</div>
                                    <div className="text-base font-bold mx-4 w-20">(SAT)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">11:00 - 18:00</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">27</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">11:00 - 18:00</div>
                                </div>
                            </div>
                        </div>
                        <div className="events">
                            <div className="title text-2xl">
                                「法援之道」首播
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
                                「法援之道」播出
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
                                「法援之道」播出
                            </div>
                            <div className="seprate my-2">
                            <img src={titleBreak} />
                            </div>
                            <div className="venue text-xl"></div>
                            <div className="date ml-4 mt-6">
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">04</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">11</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">18</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                                <div className="times flex items-center mb-4">
                                    <div className="text-5xl font-bold mx-4 w-20">25</div>
                                    <div className="text-base font-bold mx-4 w-20">(SUN)<br />JUN</div>
                                    <div className="text-xl font-bold mx-4">21:30</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}