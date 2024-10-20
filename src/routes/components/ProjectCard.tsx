import "../../styles/ProjectCard.css"
import slimNotes from "../../assets/imgs/slimNotesMockup.png"

const ProjectCard = () => {
    return (
        <span className="projectCard big-card blue-background">
            <h3>SlimNotes</h3>
            <img src={slimNotes} alt="Slim Notes Mockup"></img>
        </span>
        // devo usare viewbox
    )
}

export default ProjectCard;