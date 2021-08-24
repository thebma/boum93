import React, {useEffect, useState} from "react"
import database from "../../firebase.config"
import "./Projects.css"
import "./ProjectCard.css"
import "./ProjectCard.mobile.css"

function Projects()
{
    const [filter, setFilter] = useState("*");
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const fetchProjects = async () => {
            const projectCollectionRequest = database.collection("projects");
            const projectCollection = await projectCollectionRequest.get();
            
            projectCollection.forEach((item) => {
                setProjects(prevState => (
                    [ ...prevState, item.data() ]
                ))
            })       
        }
        fetchProjects();
    }, [])

    const tags = [];
    projects.forEach(proj => {
        proj.tags.forEach(tag => {
            if(!tags.includes(tag)) {
                tags.push(tag)
            }
        });
    });

    function handleTagSortClick(tag) {
        setFilter(tag);
    }

    return (
        <div id="projects" class="projects-container">
            <div class="projects-header">
                <h1>Projecten</h1>
                <div class="projects-tags">
                    <p>Zoeken op:</p>
                    <br/>
                    <span
                        key="tag-*" 
                        class="projects-tag"
                        onClick={() => handleTagSortClick("*")}
                    >Alles</span>
                    {
                        tags && tags
                        .sort((a,b) => { return a > b ? 1 : -1 })
                        .map(tag => {
                            return (
                                <span 
                                    key={tag}
                                    class="projects-tag"
                                    onClick={() => handleTagSortClick(tag)}
                                >
                                    { tag }
                                </span>
                            )
                        })
                    }
                </div>
            </div>

            <div class="projects-content">
                {
                    projects && projects
                        .sort((a,b) => a.sort > b.sort ? 1 : -1)
                        .filter(proj => filter === "*" ? true : proj.tags.includes(filter))
                        .map(project => {
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
                    return (
                        <img alt="Project Impression" src={img}/>
                    )                    
                })
            }
          <p class="projectcard-desc">
            {project.description} 
          </p>

          <div class="projectcard-tags">
              {
                  project.tags && project.tags.map(tag => {
                    return (
                        <span class="projectcard-tag">{tag}</span>
                    )
                  })
              }
          </div>

          <a href={project.source}>
            <button>Bekijk Broncode</button>
          </a>
      </div>  
    );
}

export default Projects;