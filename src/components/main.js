import "../components/main.css"
import { GamingInterface } from "./gaming";
export function Main({toggle})
{
    
    return(
        <div className="outer">
            <div className="dice">
                <img src="/images/dices.png"/>
            </div>
            <div className="content">
                <h2>DICE GAME</h2>
                <button onClick={toggle} className="btn">
                    PlayNow
                </button>
            </div>
        </div>
    )
}