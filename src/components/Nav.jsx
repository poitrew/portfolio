import { useState } from "react"
import { useSpring, animated } from 'react-spring'

export default function Nav() {
    const [navOn, toggleNav] = useState(false)
    const opaque = useSpring({ opacity: navOn ? 1 : 0 })
    const slide = useSpring({ marginRight: navOn ? 0 : -500 })

    return (
        <nav className='nav'>
            <a className='nav-logo' href="#">Henry Dang</a>
            <div className="nav-toggle" onClick={() => toggleNav(!navOn)}>
                <img src="./icon-info.svg" alt="" />
            </div>
            <animated.div className='nav-overlay' style={opaque}></animated.div>
            <animated.ul className="nav-social-mobile" style={slide}>
                <li className="nav-social-fb"><a href="https://www.facebook.com/thdatdg" target="_blank"><img src="./icon-fb.png" alt="" /></a></li>
                <li><a href="https://github.com/poitrew" target="_blank"><img src="./icon-github.png" alt="" /></a></li>
                <li className="nav-social-ins"><a href="https://www.instagram.com/dattdanggg" target="_blank"><img src="./icon-ins.png" alt="" /></a></li>
                <li className="nav-social-linkedin"><a href="https://www.linkedin.com/in/dgthanhdat" target="_blank"><img src="./icon-linkedin.png" alt="" /></a></li>
                <li className="nav-social-twitter"><a href="https://twitter.com/dtdat1011" target="_blank"><img src="./icon-twitter.png" alt="" /></a></li>
            </animated.ul>
            <ul className="nav-social">
                <li className="nav-social-fb"><a href="https://www.facebook.com/thdatdg" target="_blank"><img src="./icon-fb.png" alt="" /></a></li>
                <li><a href="https://github.com/poitrew" target="_blank"><img src="./icon-github.png" alt="" /></a></li>
                <li className="nav-social-ins"><a href="https://www.instagram.com/dattdanggg" target="_blank"><img src="./icon-ins.png" alt="" /></a></li>
                <li className="nav-social-linkedin"><a href="https://www.linkedin.com/in/dgthanhdat" target="_blank"><img src="./icon-linkedin.png" alt="" /></a></li>
                <li className="nav-social-twitter"><a href="https://twitter.com/dtdat1011" target="_blank"><img src="./icon-twitter.png" alt="" /></a></li>
            </ul>
        </nav>
    )
}