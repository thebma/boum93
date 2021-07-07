import { React } from "react"
import "./Projects.css"
import "./ProjectCard.css"
import "./ProjectCard.mobile.css"


function Projects()
{
    return (
        <div id="projects" class="projects-container">
            <div class="projects-header">
                <h1>Projecten</h1>
            </div>

            <div class="projects-content">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>

            </div>
        </div>
    );
}

function ProjectCard()
{
    return(
      <div class="projectcard-container">
          <h3>Project Naam</h3>
          <img src="./project.jpg"/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac dictum lectus, eget efficitur lectus. Fusce dignissim mattis massa, nec pulvinar elit finibus id. 
          </p>
          <button>Bekijk</button>
      </div>  
    );
}

export default Projects;