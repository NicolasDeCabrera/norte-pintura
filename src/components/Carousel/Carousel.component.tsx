import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselLibrary } from 'react-responsive-carousel';
import style from './Carousel.module.css'

export const Carousel = () => {
    return (
        <CarouselLibrary
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showStatus={false}
        >
            <div className={style.container}>
                <img src="./slider/1.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div className={style.container}>
                <img src="./slider/2.jpeg" />
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div className={style.container}>
                <img src="./slider/3.jpg" />
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </CarouselLibrary>
    );
};