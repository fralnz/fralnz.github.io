import pfpImg from "./assets/pfp.png";
import gbHand from "./assets/gbHand.png";
import "./App.css";

function App() {
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
                        I strive to create software that is as simple and effective as possible, while having fun
                        with it ;)
                    </p>
                </div>
                <img src={gbHand}/>
            </section>
        </>
    );
}

export default App;
