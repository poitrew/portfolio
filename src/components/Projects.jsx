import Project from './Project'
import { projects as data } from '../data.js'
import { useRef } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Projects() {

    const parallax = useRef()

    let pageNumb = 0

    const nextPage = () => {
        if (parallax.current) {
            if (pageNumb === data.length - 1) {
                pageNumb = 0;
            } else {
                pageNumb += 1
            }
            parallax.current.scrollTo(pageNumb)
        }
    }
    const prevPage = () => {
        if (parallax.current) {
            if (pageNumb === 0) {
                pageNumb = data.length - 1;
            } else {
                pageNumb -= 1;
            }
            parallax.current.scrollTo(pageNumb)
        }
    }
    const jiggle = useSpring({bottom: 0, from: {bottom: 10}, loop: {reverse: true}, config: {duration: 500}})

    const generateProject = (data) => {
        return data.map((project, index) => {
            return (
                <ParallaxLayer 
                    offset={index} 
                    key={project.id} 
                    speed={1} 
                    style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div className='project-wrapper'>
                        <div className='project-nav' onClick={prevPage}>
                            <animated.span style={jiggle}>{'<'}</animated.span>
                        </div>
                        <Project {...project}/>
                        <div className='project-nav' onClick={nextPage}>
                            <animated.span style={jiggle}>{'>'}</animated.span>
                        </div>
                    </div>
                </ParallaxLayer>)
        })
    } 

    return (
        <section className="projects-section" id="projects">
                <div className="projects-section-header">
                    <h2>Projects</h2>
                </div>
                <div className="projects">
                    <Parallax 
                        pages={data.length} 
                        horizontal
                        ref={parallax}
                        style={{background: '#018673'}}>
                        {generateProject(data)}
                    </Parallax>
                </div>
        </section>
    )
}