import "../../styles/ProjectCards.css"
import slimNotes from "../../assets/imgs/slimNotesMockup.png"
import netNote from "../../assets/imgs/netNote.png"

const ProjectCards = () => {
    return (
        <section className="cardSection">
            <a target="_blank" rel={'slim notes'} href={'https://github.com/fralnz/SlimNotes'}
               className="projectCard big-card blue-background">
                <h3>SlimNotes</h3>
                <img src={slimNotes} alt="Slim Notes Mockup"></img>
            </a>
            <a target="_blank" rel={'TCP Notes'} href={'https://github.com/RiccardoSilvestri/NetNote'}
               className="projectCard small-card green-background">
                <h3>TCP Note</h3>
                <img src={netNote} alt="Net Notes Mockup"></img>
            </a>
        </section>
    )
}

export default ProjectCards;