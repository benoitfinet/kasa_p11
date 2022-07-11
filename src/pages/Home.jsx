import Test from '../assets/bannerHome.png';
import '../sass/pages/home.scss';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Home() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <div className='home'>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <article className='home__banner' alt='banner' style={{ backgroundImage: `url(${Test})` }}>
            <p className='home__textBanner'>Chez vous, partout et ailleurs</p>
            </article>
            <div className='cardList'>
                {data && data.map(({cover, title, id }) => (
                  <article className='cardList__content' key={title} >
                      <Link to={"/" + id}>
                      <img className='cardList__img' src={cover} alt={title}/>
                      </Link>
                      <p className='cardList__title'>{title}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}
 
export default Home