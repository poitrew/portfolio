import { useSpring, animated, config } from "react-spring"
import { useEffect, useState } from "react"

function Hero() {
    const [anim, set] = useState(false)
    const opaque = useSpring({ transform: anim ? 'translateY(0px)' : 'translateY(1000px)', config: config.slow, })

    useEffect(() => set(!anim), [])

    return (
        <section className='hero-section'>
            <animated.div className='container' style={opaque}>
                <div className="hero">
                    <div className="hero-text">
                        <h1>Hi, <br />I'm <span>Henry</span></h1>
                        <p>a front-end web developer who loves building beautiful, elegant, and user-friendly websites.</p>
                    </div>
                    <div className="hero-btns">
                        <a className="btn" href='#projects'>
                            <button>Projects</button>
                        </a>
                        <a 
                            className="btn" 
                            href='./dangthanhdat_resume.pdf' 
                            download='DangThanhDat_resume.pdf'
                        >
                            <button>Download resume</button>
                        </a>
                    </div>
                </div>
            </animated.div>
		</section>
    )
}

export default Hero