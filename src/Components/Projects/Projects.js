import React, {useEffect, useState} from "react"
import database from "../../firebase.config"
import "./Projects.css"
import "./ProjectCard.css"
import "./ProjectCard.mobile.css"

function Projects()
{
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const fetchProjects = async () => {
            const projectCollectionRequest = database.collection("projects");
            const projectCollection = await projectCollectionRequest.get();
            
            projectCollection.forEach((item) => {
                console.log(item)
                setProjects([...projects, item.data()])
            });
        }
        fetchProjects();
    }, []);

    return (
        <div id="projects" class="projects-container">
            <div class="projects-header">
                <h1>Projecten</h1>
            </div>

            <div class="projects-content">
                {
                    projects && projects.map(project => {
                        return (
                            <ProjectCard key={project.id} project={project}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

function ProjectCard(props)
{
    const { project } = props;

    return(
      <div class="projectcard-container">
          <h3>{project.title}</h3>

            {
                project.images && project.images.map(img => {
                    console.log(img)
                    return (
                        <img alt="Project Impression" src={img}/>
                    )                    
                })
            }

          <p>
            {project.description} 
          </p>
          <a href={project.source}>
            <button>Broncode</button>
          </a>
      </div>  
    );
}

export default Projects;