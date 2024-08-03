import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle} from "@fortawesome/free-solid-svg-icons";
import ProjectCard from './ProjectCard';
import SDS from "../Assets/SDS.jpg"
import restaurent1 from "../Assets/guruji_1.png"
import restaurent from "../Assets/guruji_3.png"
import game from "../Assets/flappyBird.png"
import BioInfo from "../Assets/BioInfo.png"

const projects = [
    {
        image:SDS,
        title:"Shooter detection System",
        isJavaProject:"true",
        description:"The Shooter Detection System enhances public safety by providing real-time gunshot alerts and location information.Link is of website (Due to NDA).",
        codeLink:"https://shooterdetectionsystems.com/why-sds/"
    },
    {
        image:restaurent,
        title:"Restaurent website 1",
        isJavaProject:"false",
        description:"Another version of the restaurant website with enhanced UI/UX and additional features.",
        codeLink:"https://rocky17292.github.io/Guruji.github.io/"
    },
    {
        image:restaurent1,
        title:"Restaurent website 2",
        isJavaProject:"false",
        description:"A responsive website for a restaurant showcasing their menu, services, and allowing online reservations.",
        codeLink:"https://rocky17292.github.io/GURUJIs/"
    },
    {
        image:game,
        title:"Java Swing Games",
        isJavaProject:"false",
        description:"A collection of simple yet engaging games developed using Java Swing, including classics like Flappy Bird, PingPong etc.",
        codeLink:"https://github.com/Rocky17292/Swing-Games/tree/main"
    },
    {
        image:BioInfo,
        title:"BioInformatics Tools",
        isJavaProject:"false",
        description:"A set of bioinformatics tools developed to assist researchers in analyzing biological data. Features include converting molecular structures to 2D and 3D images and more.",
        codeLink:"https://github.com/Rocky17292/BioInformatics_website/tree/main"
    }
]
function Projects() {
  return (
    <div className="p-6">
      <div className="flex space-x-2 justify-center mb-10">
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
      </div>

      <div>
        <div className="font-serif mb-10 text-center text-3xl text-white">Projects</div>
      </div>

      <div className='grid lg:grid-cols-3 '>
      {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>
    </div>
  )
}

export default Projects