import banner from '../assets/images/banner/opening.png';
import slogon from '../assets/images/banner/slogon-white.png';
import {
    Link
} from "react-router-dom";

export default function Banner() {
    return (
        <div>
            <Link to="/home">
                <div className="banner open flex place-items-end h-full bg-cover bg-top" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="m-auto mr-0 py-20 px-5  w-5/12 slogon">
                        <img src={slogon} className="object-scale-down w-full ml-auto mr-10" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
