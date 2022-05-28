import Project from './Project'
import { projects as data } from '../data.js'

function Projects() {

    function generateProject(data) {
        return data.map(project => {
            return (<Project key={project.id} {...project} />)
        })
    } 

    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <span>Projects</span>
                <p>From design to code</p>
            </div>
            <div className="projects-list">
            {
                generateProject(data)
            }
            </div>
        </section>
    )
}

export default Projects