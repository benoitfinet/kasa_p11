import Accordeon from "../components/Accordeon";
import bannerAbout from "../assets/bannerAbout.png";
import '../sass/pages/about.scss';

function About() {
    return (
        <div className='about'>
            <img className='about__banner' alt='banner' src={bannerAbout}></img>
            <div className='about__accordeon'>
                <Accordeon
                Title="Fiabilité">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </Accordeon>
                <Accordeon
                Title="Respect">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
                entraînera une exclusion de notre plateforme.
                </Accordeon>
                <Accordeon
                Title="Service">
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
                </Accordeon>
                <Accordeon
                Title="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Accordeon>
            </div>
        </div>
    )
}
 
export default About