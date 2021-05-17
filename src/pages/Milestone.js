import pattern from '../assets/images/banner/banner_pattern.png';
import banner from '../assets/images/banner/milestone.jpg';
import pageTitle from '../assets/images/banner/milestone-title.png'; 

export default function Milestone() {
    return (
        <div>
            <div className="topBar-nav"></div>
            <div className="pattern flex justify-end" style={{ backgroundImage: `url(${pattern})` }}>
                <div className="sub-banner relative w-9/12" style={{ backgroundImage: `url(${banner})` }}>
                    <img src={pageTitle} className="object-scale-down w-5/12 absolute bottom-0 left-0 ml-3 mb-3" />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}
