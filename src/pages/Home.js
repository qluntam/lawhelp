import banner from '../assets/images/banner/home.png';
import slogon from '../assets/images/banner/slogon.png';

export default function Home() {
    return (
        <div>
            <div className="relative">
                <img src={banner} width="100%" />
                <div className="absolute top-0 left-0 right-0 bottom-0 my-auto mx-auto w-4/6 h-1/6 xl:pb-96 pb-80">
                    <img src={slogon} />
                </div>
            </div>
        </div>
    );
}
