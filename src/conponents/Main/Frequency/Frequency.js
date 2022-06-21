import './frequency.css';

function Frequency(){
    return(
        <div className="containerFrequency">
            <h2>Częstotliwość występowania wybranych numerów</h2>
            <h3>Analiza głównyh liczb 1-50:</h3>
            <div className="flexConteiner">
                <p>Analizowany numer:</p>
                <input type="number" placeholder="1-50" className="chooseNumberRepeatX" min="1" max="50"></input>
            </div>
            <h3>Analiza Jackpot 1-12:</h3>
            <div className="flexConteiner">
                <p>Analizowany numer:</p>
                <input type="number" placeholder="1-12" className="chooseNumberRepeatX" min="1" max="50"></input>
            </div>
            <button>Sprawdź</button>
        </div>
    )
}

export default Frequency;