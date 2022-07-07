import './pairs.css';
import {useState,useRef} from 'react';
import data from "../../../drawData";

function Pairs(){

    const [mainPairsNumberX, setMainPairsNumberX]=useState('');
    const [mainPairsNumberY, setMainPairsNumberY]=useState('');
    const [jackPairsNumberX, setJackPairsNumberX]=useState('');
    const [jackPairsNumberY, setJackPairsNumberY]=useState('');

    const[changeClass,setChangeClass]=useState(0);

    
    const CheckPairs=()=>{
        
        if(mainPairsNumberX>0 && mainPairsNumberY>0 || jackPairsNumberX>0 && jackPairsNumberY>0){
            setChangeClass(1)

            if(mainPairsNumberX>0 && mainPairsNumberY>0){
                console.log('działa')
            }
        }
        else{
            setChangeClass(0)
        }
    }

    return(
        <div className={changeClass?"active":"disactive"}>
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
                <div className={changeClass?"noNumbers":"activeNumbers"}>Nie wybrałeś żadnych liczb!</div>
            </div>
            <button
            onClick={CheckPairs}>Sprawdź</button>
        </div>
        <div className={changeClass?"results":"noResults"}>
                <div className='analisisMainNumbers'>
                    <div className='resultMain'> Liczba  występuje z liczbą w : <span></span> losowaniach </div>
                    <p>Najczęściej występujące liczby z liczbą to: </p>
                    <div>{}</div>
                   
                </div>
                 <div className='analisisJackNumbers'>
                    <div className='resultJack'> Liczba  występuje z liczbą w : <span></span> losowaniach </div>
                    <p>Najczęściej występujące liczby z liczbą to: </p>
                    <div>{}</div>
                 </div>
                 
            </div>
        </div>
    )
}

export default Pairs;