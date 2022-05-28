import { useState } from 'react';
import NavInfo from './NavInfo';

function Hero() {
    let [navMobileOn, setNavMobileOn] = useState(false)
    let [opacityAnim, setOpacityAnim] = useState(false)

    function toggleNav() {
        setOpacityAnim(false)
        if(navMobileOn) {
            setTimeout(() => {
                setNavMobileOn(!navMobileOn)
            }, 500);
        } else {
            setNavMobileOn(!navMobileOn)
        }
    }

    function setOpac() {
        setOpacityAnim(!opacityAnim)
    }

    return (
        <section className='hero'>
            <nav className='nav'>
                <a className='nav-logo' href="#">{navMobileOn ? "Information" : "Poitrew"}</a>
                <img className={navMobileOn ? 'nav-toggle rotate' : 'nav-toggle'} onClick={toggleNav} src='./ham.svg'></img>
                {navMobileOn 
                    ? 
                        <NavInfo handleClick={toggleNav} opacityAnim={opacityAnim} setOpac={setOpac} />
                    : 
                        (<></>)
                }
            </nav>
            <div className="container">
                <div className="hero-main">
                    <span>Hello,</span>
                    <h1>I'm Thanh Dat</h1>
                    <p>a front-end web developer who loves building beautiful, elegant, and user-friendly websites.</p>
                </div>
                <div className="hero-ctas">
                    <a className="btn" href='#projects'>See my works</a>
                    <a className="btn" href='./dangthanhdat_resume.pdf' download='DangThanhDat_resume.pdf'>Download resume</a>
                </div>
            </div>
		</section>
    )
}

export default Hero