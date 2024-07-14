import "../components/rules.css"
export function Rules()
{
    const text=` 
    Select any number
    Click on dice image
    after click on  dice  if selected number is equal to dice number you will get same point as dice
    if you get wrong guess then  2 point will be dedcuted`;
    return(
        <div className="rules">
                    <h2>How to play dice game</h2> 
                <pre>
                   {text}
                </pre>
            </div>
    )
}