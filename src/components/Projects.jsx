import Project from './Project'
import { projects as data } from '../data.js'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Projects() {

    const parallax = useRef()

    let pageNumb = 0

    const nextPage = () => {
        if (parallax.current) {
            pageNumb += 1
            parallax.current.scrollTo(pageNumb % data.length)
        }
    }

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
                        <Project {...project}/>
                        <div className='project-nav' onClick={nextPage}>
                            <span>{'>'}</span>
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
                        >
                        <ParallaxLayer offset={0} factor={data.length} className="projects"></ParallaxLayer>
                        {generateProject(data)}
                    </Parallax>
                </div>
        </section>
    )
}