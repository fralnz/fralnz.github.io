import pfpImg from "../assets/imgs/pfp.png";
import gbHand from "../assets/imgs/gbHand.png";
import "../styles/Home.css";
import ProjectCards from "./components/ProjectCards.tsx";

function Home() {
    return (
        <>
            <section className="speechTitle">
                <div className="speechBubbleBody">
                    <h1>Hi, I'm Francesco. I like computers.</h1>
                    <div className="speechBubbleTailBottom"></div>
                </div>
                <div>
                    <img src={pfpImg} className="pfp"/>
                </div>
            </section>
            <section className="introduction">
                <div className="speechBubbleBody">
                    <p>
                        I'm a Computer Science student born and raised in Italy, passionate
                        about everything retro, nature and photography. <br/>
                        I strive to create software that is as simple and effective as possible, while having fun ;)
                    </p>
                </div>
                <img src={gbHand} alt="GameBoy Hand"/>
            </section>
            <ProjectCards/>
        </>
    );
}

export default Home;
