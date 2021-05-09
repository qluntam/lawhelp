import banner from '../assets/images/banner/home.png';
import slogon from '../assets/images/banner/slogon.png';

export default function Home() {
    return (
        <div className="banner flex place-items-end h-full bg-cover bg-top" style={{ backgroundImage: `url(${banner})` }}>
            <div className="m-auto mr-10 pb-96  text-center">
                <img src={slogon} className="object-scale-down w-9/12 ml-auto mr-0" />
            </div>
        </div>
    );
}
