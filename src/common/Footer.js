import fb from '../assets/images/icons/fb.png';

import logolad from '../assets/images/header/logo-lad.png';
import logofiftyWhite from '../assets/images/header/logo-fifty-white.png';

import {
    Link
} from "react-router-dom";
import i18n from '../i18n';
import { useTranslation, Trans } from "react-i18next";

export default function Footer() {

    let lng = i18n.language;
    let locale = "/" + lng;
    const { t } = useTranslation('common');
    
    return (
        <div className="footer grid  grid-cols-3">
            <div className="sitemap col-span-2 py-10 pl-20 text-fsm">
                <div className="heading text-2xl font-bold mb-2">
                    {t('title.sitemap')}
                </div>
                <ul className="flex flex-row">
                    <li className="text-2xl mr-9 hover:text-white">
                        <Link to={locale + "/director"}><Trans i18nKey="title.director" ns="common"></Trans></Link>
                    </li>
                    <li className="text-2xl mr-9 hover:text-white">
                        <Link to={locale + "/message"}><Trans i18nKey="title.congrats" ns="common"></Trans></Link>
                    </li>
                    <li className="text-2xl mr-9 hover:text-white">
                        <Link to={locale + "/milestone"}><Trans i18nKey="title.milestone" ns="common"></Trans></Link>
                    </li>
                    <li className="text-2xl text-center">
                        <div className="hover:text-white">
                            <Link to={locale + "/events"}><Trans i18nKey="title.events" ns="common"></Trans></Link>
                        </div>
                        <ul>
                            <li className="text-xl hover:text-white">
                                <Link to={locale + "/events#jun"}>{t('title.month.june')}</Link>
                            </li>
                            <li className="text-xl hover:text-white">
                                <Link to={locale + "/events#jul"}>{t('title.month.july')}</Link>
                            </li>
                            <li className="text-xl hover:text-white">
                                <Link to={locale + "/events#aug"}>{t('title.month.august')}</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="copyright-social p-10">
                <div className="flex flex-row justify-end mb-4 ">
                    <div><a href={t('title.ladURL')} target="_blank"><img src={logolad} alt="LAD" className="object-scale-down h-20 mr-8" /></a></div>
                    <div><img src={logofiftyWhite} alt="Fifty" className="object-scale-down h-20" /></div>
                </div>
                <div className="social-logo flex justify-end">
                    <div className="fb-logo mr-2">
                        <a href="https://www.facebook.com/%E6%B3%95%E6%8F%B4%E4%BA%94%E5%8D%81%E5%B9%B4-107772427788771" target="_blank">
                            <img src={fb} alt="Facebook 法援五十年" className="w-28" />
                        </a>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-white my-5">
                        <a href={t('title.contactusURL')} target="_blank">{t('title.contactus')}</a>
                    </div>
                    <div className="text-white">Copyright © 2021 Legal Aid Department.<br />All Rights Reserved.</div>
                </div>
            </div>
        </div>
    );
}