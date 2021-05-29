import banner from '../assets/images/banner/opening.png';
import slogon from '../assets/images/banner/slogon-white.png';
import {
    Link,
    useParams
} from "react-router-dom";

export default function Banner() {
    let { locale } = useParams();

    return (
        <div>
            <Link to={"/" + locale + "/home"}>
                <div className="startup-banner bg-cover md:bg-contain bg-right-left relative flex" style={{ backgroundImage: `url(${banner})` }}>
                    
                    <div className="hidden md:flex mt-auto ml-auto mb-10 mr-0 py-20 px-10 w-5/12 h-3/5 slogon">
                        <img src={slogon} className="m-auto" />
                    </div>
                </div>
            </Link>
            <div className="md:hidden slogon">
                <img src={slogon} className="p-10" />
            </div>
        </div>
    );
}
