import "./home.scss"
import Hero from "../components/hero";
import SubHero from "../components/sub-hero";
import Section from "../sections/section";
import SectionCard from "../sections/section-card";
import SectionTwo from "../sections/section-two";


const Home = () => {
    return (
        <div>
            <Hero />
            <SubHero />
            <div className="home-container">
                <Section />
                <SectionCard />
                <SectionTwo />
            </div>
        </div>   
    );
}

export default Home; 