import Project from './Project'
import { projects as data } from '../data.js'

function Projects() {

    function generateProject(data) {
        return data.map(project => {
            return (<Project key={project.id} {...project} />)
        })
    } 

    return (
        <section className="projects-section" id="projects">
            <div className="projects-section-header">
                    <div className="container">
                        <h2>Projects</h2>
                    </div>
            </div>
            <div className="container">
                <div className="projects">
                {
                    generateProject(data)
                }
                </div>
            </div>
        </section>
    )
}

export default Projects