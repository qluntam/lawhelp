import banner from '../assets/images/banner/directors.png';
import pattern from '../assets/images/banner/banner_pattern.png';
import pageTitleTC from '../assets/images/banner/tc/director-title.png';
import pageTitleSC from '../assets/images/banner/sc/director-title.png';
import pageTitleEN from '../assets/images/banner/en/director-title.png';
import directorImg from '../assets/images/pages/director/director.jpg'; 
import signEN from '../assets/images/pages/director/sign-en.png';
import signZH from '../assets/images/pages/director/sign-zh.png';

import { useTranslation, Trans } from "react-i18next";

export default function Director() {

    const { t, i18n } = useTranslation('director');

    let pageTitle, titleClass, sign;
    switch(i18n.language) {
        case "tc":
            pageTitle = pageTitleTC;
            titleClass = ' w-4/12';
            sign = signZH;
            break;
        case "sc":
            pageTitle = pageTitleSC;
            titleClass = ' w-4/12';
            sign = signZH;
            break;
        case "en":
            pageTitle = pageTitleEN;
            titleClass = ' w-6/12';
            sign = signEN;
            break;
    }

    return (
        <div>
            <div className="topBar-nav"></div>
            <div className="pattern flex justify-end" style={{ backgroundImage: `url(${pattern})` }}>
                <div className="relative w-full md:w-4/5 bg-no-repeat bg-cover bg-right-top" style={{ backgroundImage: `url(${banner})` }}>
                    <img src={pageTitle} className={"object-scale-down absolute bottom-0 left-0 ml-3 mb-3" + titleClass} />
                </div>
            </div>
            <div className="flex mx-10 my-10 flex-col md:flex-row">
                <div className="w-full md:w-3/12">
                    <img src={directorImg} />
                    <div className="ml-2 mt-5">
                        {t('name')}<br />
                        {t('title')} <br />
                        <img src={sign} />
                    </div>
                </div>
                <div className="w-full md:w-9/12 md:pl-10 text-justify">
                    <Trans i18nKey="word" ns="director">
                        <p className="mb-4">本署於2000年出版「法義之門」紀念特刊，為部門三十周年誌慶。本署一直堅守使命，繼往開來，藉着前人奠下的堅實穩固基礎，不斷拓展及提升法律援助服務，確保所有符合資格接受法律援助的人，不會因欠缺經濟能力而沒法尋求公義。多年來，法援署無懼種種改變和挑戰，與社會一同茁壯成長，成績令人振奮。 </p>
                        <p className="mb-4">過去二十年，香港發展一日千里，為緊貼社會步伐，與時並進，本署除了主動檢視服務範疇及工作流程外，還引進嶄新科技，以及為工作注入新元素。就整體法律援助服務而言，本署喜見普通法律援助計劃(普通計劃)及法律援助輔助計劃(輔助計劃)的範圍擴大至涵蓋更多類別的訴訟。目前，本署每年處理逾15,000宗民事法援申請，以及超過3,000宗刑事法援申請，當中大部分個案的性質複雜，而且影響深遠。本署亦不時就評定法援申請人財務資格的準則，以及申請人的財務資格限額進行檢討。為落實2019年《施政報告》的措施，經本署提請後，普通計劃及輔助計劃的財務資格限額已於2020年6月26日起，分別調高至420,400港元及 2,102,000港元。</p>
                        <p className="mb-4">本署向來重視為市民提供優質的顧客服務。我們致力創新，積極投入資源，利用先進科技的優點提升服務，並取得顯著成 效。過去二十年，本署推出了各項嶄新的服務，為市民帶來方便，當中包括設立法律援助電子服務入門網站，讓市民在網上提交預辦申請所需資料，執業律師亦可經該系統提交法援個案報告。本署的網站亦設有經濟審查計算程式，市民可藉此初步了解自己的財務狀況是否符合申請法援的財務資格。此外，市民可利用繳費靈、自動櫃員機及網上銀行等，更便捷地繳付款項，還可透過掃描二維碼即時簡易地經流動裝置閱覽本署的小冊子。本署的網站亦新增了電子預約系統，供擬申請法援的人在網上預約索取各類與申請法援相關的表格及文件。另外，為向申請人提供更舒適的環境，本署翻新了總部及九龍分署的等候區及會面室。本署一直努力不懈，全力以赴地提供優質服務，並獲得社會肯定，成績令人鼓舞。本署分別在2009年及2016年榮獲申訴專員嘉許獎(公營機構獎)大獎，並在2015年獲頒申訴專員嘉許獎(公營機構獎)。此外，本署更獲頒2019年公務員優質服務獎勵計劃「特別嘉許獎—安健工作間」及「部門精進服務獎 (小部門組別)銅獎」，成就獲得肯定。</p>
                        <p className="mb-4">公正透明的法律援助制度，對維護法治起着舉足輕重的作用。多年來，本署一直十分珍視與各界的溝通，並通過不同途徑及活動，與法律援助服務局、立法會、法律界、持份者、非政府機構及市民接觸。富有成效的交流有助各方面互相理解，並指引着本署不斷改進。</p>
                        <p className="mb-4">法律援助政策範疇在2007年7月從政務司司長辦公室轉移至民政事務局。其後，法律援助服務局在參考當時一個顧問研究報告後，建議法援署重新定位，本署於是由2018年7月起，在架構上重新撥歸政務司司長直接管轄。不管過去經歷怎麼樣的轉變，未來又會面對什麼樣的挑戰，法律援助署署長都會竭盡所能，以公正、透明及負責任的態度執行法定職能，而法援署一直以來不偏不倚地提供法援服務的立場亦會始終不變。 </p>
                        <p className="mb-4">多年來，本署職員克盡厥職，辦事高效專業，並懷着滿腔熱誠盡心為市民服務，任重而道遠。本人衷心希望本紀念特刊不但記錄了法援署在過去半世紀所作的貢獻，更會啟迪讀者，從中明白法律援助對維護司法公正是不可或缺的，而本署亦會藉着提供卓越的法援服務，繼續擔當守護香港法治的基石。 </p>
                    </Trans>
                </div>
            </div>
        </div>
    );
}
