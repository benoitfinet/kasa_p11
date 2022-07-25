import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Accordeon from "../components/Accordeon";
import Error from './Error';
import Stars from '../components/Stars';
import '../sass/pages/details.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
 
function Details() {
    const { logementID } = useParams()

    const [datas, setDatas] = useState([]);
    const [currentLogement, setCurrentLogement] = useState()
    const [loading, setLoading] = useState(true);
    const [error500, setError500] = useState(null);
    const [error404, setError404] = useState(true);
    let [carouselItem, setcarouselItem] = useState(0);

    useEffect(() => {
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => {
            setDatas(actualData);
            setError500(null);
          })
          .catch((err) => {
            setError500(err.message);
            setDatas(null);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
      
      useEffect(() => {
        datas.forEach(item => {
            if(item.id === logementID) {
                setError404(false)
                setCurrentLogement(item)
            }
        })
      });

    function reduceCarousel() {
        if(carouselItem === 0) {
            setcarouselItem(carouselItem => carouselItem + currentLogement.pictures.length)
        }
        setcarouselItem(carouselItem => carouselItem - 1)
    }

    function augmentCarousel() {
        if(carouselItem === currentLogement.pictures.length - 1) {
            setcarouselItem(carouselItem => carouselItem - carouselItem)
        } else {
            setcarouselItem(carouselItem => carouselItem + 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            augmentCarousel()
        }, 4000);
        return () => clearInterval(interval)
    })

    if(loading) {
        return <>
            <div>A moment please...</div>
        </>
    }

    if(error500) {
        return <>
            <div>{`There is a problem fetching the post data - ${error500}`}</div>
        </>
    }

    if(error404) {
        return <>
            <Error />
        </>
    }
 
    return (
        <div>
            <div>
                <div className='details'>
                    <div className='details__containerImage'>
                        <FontAwesomeIcon className='details__containerImage--chevronleft fa-5x' icon={faChevronLeft} onClick={reduceCarousel}/>
                        <img className='details__containerImage--img' src={currentLogement.pictures[carouselItem]} alt={currentLogement.title}></img>
                        <FontAwesomeIcon className='details__containerImage--chevronRight fa-5x' icon={faChevronRight} onClick={augmentCarousel}/>
                        <p className='details__containerImage--counter'>{carouselItem + 1} / {currentLogement.pictures.length}</p>
                    </div>
                    <div className='details__top'>
                        <div className='details__top--left'>
                            <p className='details__title'>{currentLogement.title}</p>
                            <p className='details__location'>{currentLogement.location}</p>
                            <div className='details__tags'>
                                {currentLogement.tags.map(tag => {
                                    return <p className='details__tags--item' key={tag}>{tag}</p>
                                })}
                            </div>
                        </div>
                    <div className='details__top--right'>
                        <div className='details__top--nameAndImage'>
                            <p className='details__top--name'>{currentLogement.host.name}</p>
                            <img className='details__top--image' alt={currentLogement.host.name} src={currentLogement.host.picture} />
                        </div>
                        <div className='details__top--rating'>
                            <Stars 
                            star={currentLogement.rating}
                            />
                        </div>
                    </div>
                    </div>
                    <div className='details__accordeon'>
                        <div className='details__accordeon--both'>
                            <Accordeon
                            Title="Description"
                            >{currentLogement.description}</Accordeon>
                        </div>
                        <div className='details__accordeon--both'>
                            <Accordeon
                            Title="Équipements"
                            >{currentLogement.equipments.map(equipement => {
                                return <p className='details__accordeon--item' key={equipement}>{equipement}</p>
                            })}</Accordeon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details