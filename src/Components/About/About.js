import { React } from 'react'
import "./About.css"
import "./About.mobile.css"

function About()
{
    return (
        <div id="about">
            <img alt="Avatar" class="about-avatar" src="https://avatars.githubusercontent.com/u/50952472?v=4"/>
            <div class="about-center">
                <div class="about-column about-me">
                    <h1>Alex Bouma</h1>
                    <h2>Programmeur</h2>
                    <h3>Front-end Developer</h3>
                    <h3>Back-end Developer</h3>
                    <h3>Game Technologie</h3>
                </div>
                <div class="about-column about-details">
                    <p>
                    Een gedreven programmeur met een 
                    grote passie voor zijn vak. Ik ben altijd 
                    opzoek naar manieren waar ik mijzelf kan
                    ontwikkelen. Met deze ervaring en 
                    mindset bouw ik graag hoogwaardige 
                    software met een oog voor detail en 
                    altijd nieuwsgierig naar de laatste, 
                    innovatieve technieken.
                    Graag werk ik in teamverband, waar we 
                    samen resultaatgericht werken naar het 
                    ultieme product. Communicatie, openminded zijn en technieken zoals Scrum 
                    gaan wij aan de slag.
                    </p>
                </div>
                <div class="clearfix"></div>
            </div>
            <svg class="about-transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#191923" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,261.3C640,277,800,267,960,266.7C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    )
}

export default About;