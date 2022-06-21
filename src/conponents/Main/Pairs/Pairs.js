import './pairs.css';

function Pairs(){
    return(
        <div className="containerPairs">
            <h2>Analiza par liczb:</h2>
            <h3>Analiza głównyh liczb 1-50:</h3>
            <div className="flexConteiner">
                <p>Analizowana liczba X:</p>
                <input type="number" placeholder="1-50" className="chooseNumberRepeatX" min="1" max="50"></input>
            </div>
            <h3>Analiza Jackpot 1-12:</h3>
            <div className="flexConteiner">
                <p>Analizowana liczba  Y:</p>
                <input type="number" placeholder="1-12" className="chooseNumberRepeatX" min="1" max="50"></input>
            </div>
            <button>Sprawdź</button>
        </div>
    )
}

export default Pairs;