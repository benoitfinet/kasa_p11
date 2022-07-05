import Test from '../assets/bannerHome.png';
import '../sass/pages/home.scss';
import { useEffect, useState } from 'react';

function Home() {
    let [toto, setToto] = useState([])
    useEffect(() => {
        getResult()
    }, [])
    const getResult = async () => {
        const response = await fetch("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let test = await response.json()
        setToto(test)
    }

    return (
        <div className='home'>
            <img className='home__banner' alt='banner' src={Test}></img>
            <p className='home__textBanner'>Chez vous, partout et ailleurs</p>
        </div>
    )
}
 
export default Home