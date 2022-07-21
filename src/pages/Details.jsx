import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Accordeon from "../components/Accordeon";
import Stars from '../components/Stars';
import '../sass/pages/details.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
 
function Details() {
    const { logementID } = useParams()

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let [carouselItem, setcarouselItem] = useState(0);

    function reduceCarousel() {
        setcarouselItem(carouselItem => carouselItem - 1)
    }

    function augmentCarousel() {
        setcarouselItem(carouselItem => carouselItem + 1)
    }

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
            setData(actualData);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setData(null);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);

      useEffect(() => {
        const interval = setInterval(() => {
            setcarouselItem(carouselItem => carouselItem + 1)
        }, 5000);
        return () => clearInterval(interval)
    })
 
    return (
        <div>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <div>
                {data && data.map(({...data }) => (
                    <div key={data.id}>
                    {data.id === logementID ?
                        <div className='details'>
                            <div className='details__containerImage'>
                                <FontAwesomeIcon className='details__containerImage--chevronleft fa-5x' icon={faChevronLeft} onClick={reduceCarousel}/>
                                <img className='details__containerImage--img' src={data.pictures[carouselItem] === undefined
                                    ?
                                    setcarouselItem(carouselItem => carouselItem - carouselItem) && data.pictures[carouselItem - carouselItem]
                                    :
                                    data.pictures[carouselItem]} alt={data.title}></img>
                                <FontAwesomeIcon className='details__containerImage--chevronRight fa-5x' icon={faChevronRight} onClick={augmentCarousel}/>
                            </div>
                            <div className='details__top'>
                                <div className='details__top--left'>
                                    <p className='details__title'>{data.title}</p>
                                    <p className='details__location'>{data.location}</p>
                                    <div className='details__tags'>
                                        {data.tags.map(tag => {
                                            return <p className='details__tags--item' key={tag}>{tag}</p>
                                        })}
                                    </div>
                                </div>
                            <div className='details__top--right'>
                                <div className='details__top--nameAndImage'>
                                    <p className='details__top--name'>{data.host.name}</p>
                                    <img className='details__top--image' alt={data.host.name} src={data.host.picture} />
                                </div>
                                <div className='details__top--rating'>
                                    <Stars 
                                    star={data.rating}
                                    />
                                </div>
                            </div>
                            </div>
                            <div className='details__accordeon'>
                                <div className='details__accordeon--both'>
                                    <Accordeon
                                    Title="Description"
                                    >{data.description}</Accordeon>
                                </div>
                                <div className='details__accordeon--both'>
                                    <Accordeon
                                    Title="Équipements"
                                    >{data.equipments.map(equipement => {
                                        return <p className='details__accordeon--item' key={equipement}>{equipement}</p>
                                    })}</Accordeon>
                                </div>
                            </div>
                        </div>


                        : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Details