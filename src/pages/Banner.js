import banner from '../assets/images/banner/opening.png';
import slogon from '../assets/images/banner/slogon-white.png';
import {
    Link
} from "react-router-dom";

export default function Banner() {
    return (
        <div>
            <Link to="/home">
                <div className="relative">
                    <img src={banner} width="100%" />
                    <div className="mt-auto ml-auto mb-10 mr-0 py-10 px-10 w-5/12 h-3/5 slogon absolute top-0 left-0 right-0 bottom-0 flex">
                        <img src={slogon} className="m-auto" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
