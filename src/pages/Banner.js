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
                <div className="h-screen bg-cover bg-right-left flex" style={{ backgroundImage: `url(${banner})` }}>
                    <div></div>
                    <div className="mt-auto ml-auto mb-10 mr-0 py-10 px-10 w-5/12 h-3/5 slogon">
                        <img src={slogon} className="m-auto" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
