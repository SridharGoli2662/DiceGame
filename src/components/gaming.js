import { useState } from "react"
import "../components/gaming.css"
import { Rules } from "./rules";
export function GamingInterface() {
    const num = [1, 2, 3, 4, 5, 6]
    const [getvalue, setvalue] = useState();
    const [getscore, setscore] = useState(0);
    console.log(getvalue)
    const [getbc, setbc] = useState(false);
    const [currentDice, setCurrentDice] = useState(1);
    function onclickselect(x) {
        setvalue(x);
        setbc(!getbc);
    }
    const [getnewcompo, setnewcompt] = useState(false);
    const [ermsg,err] = useState(false);
    const [errormsg, setmsg] = useState();
    // function trial()
    // {
    //     err(!ermsg);
    // }
    function onclickhandle() {
        setnewcompt(!getnewcompo);
    }
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const roleDice = () => {
        if (getvalue === undefined) {
            err(true);
            setmsg("You Haven't Selected Any Number");
        }
        else { 
              err(false);
              setmsg("")
            const randomNumber = generateRandomNumber(1, 7);
            setCurrentDice((prev) => randomNumber);
        }
        if (getvalue === currentDice) {
            setscore(getscore + 1);
        }
        else{
            setvalue()
        }
        // {score}
    };
    // function score()
    // {
    //     if (getvalue === currentDice) {
    //         setscore(getscore + 1);
    //     }
    //     else{
    //         setvalue(0)
    //     }
    // }
    function setzero() {
        setscore(0);
    }
    return (
        <div className="head">
            {/* <h3>{ermsg && {errormsg}}</h3> */}
            <h3>{errormsg}</h3>
            <div className="top" >
                <div>
                    <h1>{getscore}</h1>
                    <p>TotalScore</p>
                </div>
                <div className="numpanel">
                    {
                        num.map((value, index) =>
                            <div onClick={() => onclickselect(value)} className={`box ${getbc ? 'selected' : ''} `} key={index}>{value}</div>
                        )
                    }
                </div>
            </div>
                <span><h2>Selected Value is: {getvalue}</h2></span> 
            <div className="dicethrow">
                <img onClick={roleDice} src={`/dices/dice_${currentDice}.png`}></img>
                <p>Click On Dice To Roll</p>
                <div className="btns">
                    <button onClick={setzero}>
                        Reset Score
                    </button>
                    <button onClick={onclickhandle}>Show Rules</button>
                </div>
            </div>
            <div>
                {getnewcompo && <Rules></Rules>}
            </div>
        </div>
    )
}