function Hero(props) {

    return (
        <section style={props.style} className='hero-section'>
            <div className='container' style={props}>
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
            </div>
		</section>
    )
}

export default Hero