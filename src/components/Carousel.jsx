import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Carousel({length, title, picture}) {

    let [carouselItem, setcarouselItem] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            augmentCarousel()
        }, 4000);
        return () => clearInterval(interval)
    })

    function reduceCarousel() {
        if(carouselItem === 0) {
            setcarouselItem(carouselItem => carouselItem + length)
        }
        setcarouselItem(carouselItem => carouselItem - 1)
    }

    function augmentCarousel() {
        if(carouselItem === length - 1) {
            setcarouselItem(carouselItem => carouselItem - carouselItem)
        } else {
            setcarouselItem(carouselItem => carouselItem + 1)
        }
    }
    return (
        <div className='details__containerImage'>
            <FontAwesomeIcon className='details__containerImage--chevronleft fa-5x' icon={faChevronLeft} onClick={reduceCarousel}/>
            <img className='details__containerImage--img' src={picture[carouselItem]} alt={title} />
            <FontAwesomeIcon className='details__containerImage--chevronRight fa-5x' icon={faChevronRight} onClick={augmentCarousel}/>
            <p className='details__containerImage--counter'>{carouselItem + 1} / {length}</p>
        </div>
    )
}
 
export default Carousel