import "./hero.scss"
import Logo from "../assets/dreammakercorp-logo-large.png"

import Spline from '@splinetool/react-spline';


const Hero = () => {


    
    return (
        <div className="hero-container">
            <div className="hero-canvas" id="canvas3d">
            <Spline scene="https://prod.spline.design/ELSuz5fstj-YST-Q/scene.splinecode" />
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