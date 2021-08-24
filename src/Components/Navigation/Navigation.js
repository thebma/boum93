import { React } from "react"
import "./Navigation.css"
import "./Navigation.mobile.css"


function Navigation() {
    return (
        <div class="navigation">
            <div class="navigation-column">
                <svg class="navigation-icon" height="40" width="40">
                    <circle cx="20" cy="35" r="15" fill="#ff9429" />
                </svg>

                <h1 class="navigation-title">BOUM93</h1>
            </div>
            <div class="navigation-column">
                <ul class="navigation-list">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#about">OVER MIJ</a></li>
                    <li><a href="#projects">PROJECTEN</a></li>
                </ul>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#191923" fill-opacity="1" d="M0,32L80,42.7C160,53,320,75,480,85.3C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
    );
}

export default Navigation;