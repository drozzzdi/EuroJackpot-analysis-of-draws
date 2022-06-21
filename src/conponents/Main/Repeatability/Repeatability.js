import './repeatability.css';

function Repeatability(){
    return(
        <div className="containerRepeatability">
            <h2>Wystąpienie numaru X po numerze Y w kolejnym losowaniu</h2>
            <h3>Analiza głównych liczb 1-50:</h3>
            <div className="flexConteiner">
                <p className="repeatNumberX">Analizowana liczba X:</p> 
                <input type="number" placeholder="1-50" className="chooseNumberRepeatX" min="1" max="50"></input>
            </div>
            <div className="flexConteiner">
                <p className="repeatNumberY">Analizowana liczba Y:</p> 
                <input type="number" placeholder="1-50" className="chooseNumberRepeatY" min="1" max="50"></input>
            </div>
            <h3>Analiza Jackpota 1-12:</h3>
            <div className="jackpot">
                <div className="flexConteiner">
                    <p className="repeatNumberX">Analizowana liczba X:</p> 
                    <input type="number" placeholder="1-12" className="chooseNumberRepeatX" min="1" max="50"></input>
                </div>
                <div className="flexConteiner">
                    <p className="repeatNumberY">Analizowana liczba Y:</p> 
                    <input type="number" placeholder="1-12" className="chooseNumberRepeatY" min="1" max="50"></input>
                </div>
            </div>
            
            <button className="RepeatButton">Sprawdź</button>
        </div>
    )
}

export default Repeatability;