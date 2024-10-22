import "../../styles/ProjectCards.css"
import slimNotes from "../../assets/imgs/slimNotesMockup.png"
import netNote from "../../assets/imgs/netNote.png"

const ProjectCards = () => {
    return (
        <section className="cardSection">
            <span className="projectCard big-card blue-background">
                <h3>SlimNotes</h3>
                <img src={slimNotes} alt="Slim Notes Mockup"></img>
            </span>
            <span className="projectCard small-card green-background">
                <h3>TCP Note</h3>
                <img src={netNote} alt="Net Notes Mockup"></img>
            </span>
        </section>
    )
}

export default ProjectCards;