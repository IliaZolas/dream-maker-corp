import "./hero.scss"
import { Application } from '@splinetool/runtime';
import Logo from "../assets/dreammakercorp-logo-large.png"

const Hero = () => {

    // const canvas = document.getElementById("canvas3d");
    // const hero = new Application(canvas);
    // hero.load('https://prod.spline.design/Ag5gbm8Q1-a73vQ6/scene.splinecode');
    
    return (
        <div className="hero-container">
            <div className="hero-canvas" id="canvas3d">

            </div>
            <div>
                <div className="hero-blurb">
                    <div>
                        <img src={Logo} alt="" style={{ width: "450px"}} />
                    </div>
                    <div className="hero-description">
                        <p>
                        Dream Maker Corp is an avant-garde 
                        technology company specializing in the 
                        creation of extraordinary web applications,
                        digital experiences, and immersive 
                        solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;