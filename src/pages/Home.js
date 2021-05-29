import banner from '../assets/images/banner/home.png';
import slogon from '../assets/images/banner/slogon.png';

export default function Home() {
    return (
        <div>
            <div className="home-banner relative bg-cover md:bg-contain" style={{ backgroundImage: `url(${banner})` }}>
                <div className="absolute top-0 left-36 right-0 bottom-0 w-4/6 h-1/6 m-auto pb-52 sm:pb-52 md:pb-64 lg:pb-72 xl:pb-96">
                    <img src={slogon} />
                </div>
            </div>
        </div>
    );
}
