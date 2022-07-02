import './pairs.css';
import {useState} from 'react';

function Pairs(){

    const [mainPairsNumberX, setMainPairsNumberX]=useState('');
    const [mainPairsNumberY, setMainPairsNumberY]=useState('');
    const [jackPairsNumberX, setJackPairsNumberX]=useState('');
    const [jackPairsNumberY, setJackPairsNumberY]=useState('');

    return(
        <div className="containerPairs">
            <h2>Analiza par liczb:</h2>
            <h3>Analiza głównyh liczb 1-50:</h3>
            <div className="flexConteiner">
                <p>Analizowana liczba X:</p>
                <input 
                type="number" 
                placeholder="1-50" 
                className="chooseNumberRepeatX" 
                min="1" 
                max="50"
                value={mainPairsNumberX}
                onChange={(e)=>setMainPairsNumberX(e.target.value)}
                ></input>
            </div>
            <div className="flexConteiner">
                <p>Analizowana liczba Y:</p>
                <input 
                type="number" 
                placeholder="1-50" 
                className="chooseNumberRepeatX" 
                min="1" 
                max="50"
                value={mainPairsNumberY}
                onChange={(e)=>setMainPairsNumberY(e.target.value)}
                ></input>
            </div>
            <h3>Analiza Jackpot 1-12:</h3>
            <div className="flexConteiner">
                <p>Analizowana liczba  X:</p>
                <input 
                type="number" 
                placeholder="1-12" 
                className="chooseNumberRepeatX" 
                min="1" 
                max="50"
                value={jackPairsNumberX}
                onChange={(e)=>setJackPairsNumberX(e.target.value)}
                ></input>
            </div>
            <div className="flexConteiner">
                <p>Analizowana liczba  Y:</p>
                <input 
                type="number" 
                placeholder="1-12" 
                className="chooseNumberRepeatX" 
                min="1" 
                max="50"
                value={jackPairsNumberY}
                onChange={(e)=>setJackPairsNumberY(e.target.value)}
                ></input>
            </div>
            <button>Sprawdź</button>
        </div>
    )
}

export default Pairs;