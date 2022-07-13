import './frequency.css';
import {useState} from 'react';
import data from "../../../drawData";
import Result from './Result';
import {useSelector} from 'react-redux';

function Frequency(){

    const [mainNumber, setMainNumber]=useState('');
    const [jackNumber, setJackNumber]=useState('');

    const changeClass=useSelector(state=>state.changeClass);
    console.log(changeClass)
    return(
        <div className={changeClass>0?"active":"disactive"}>
        <div className="containerFrequency">
            <h2>Częstotliwość występowania wybranych numerów</h2>
            <h3>Analiza głównyh liczb 1-50:</h3>
            <div className="flexConteiner">
                <p>Analizowany numer:</p>
                <input 
                type="number" 
                placeholder="1-50" 
                className="chooseNumberRepeatX" 
                min="1" 
                max="50"
                value={mainNumber}
                onChange={(e)=>setMainNumber(e.target.value)}
                ></input>
            </div>
            <h3 className='secondSection'>Analiza Jackpot 1-12:</h3>
            <div className="flexConteiner">
                <p>Analizowany numer:</p>
                <input 
                type="number" 
                placeholder="1-12" 
                className="chooseNumberRepeatX" 
                min="1" 
                max="50"
                value={jackNumber}
                onChange={(e)=>setJackNumber(e.target.value)}
                ></input>
                <div className={changeClass?"noNumbers":"active"}>Nie wybrałeś żadnych liczb!</div>
            </div>
            <Result
            main={mainNumber}
            jack={jackNumber}/>
        </div>
        <div className={changeClass?"results":"noresults"}>
                <div className='analisisMainNumbers'>
                    <div className='resultMain'> Liczba {mainNumber} występuje w: <span>{}</span> losowaniach </div>
                   
                </div>
                 <div className='analisisJackNumbers'>
                    <div className='resultJack'> Liczba {jackNumber} występuje w: <span>{}</span> losowaniach </div>
                 </div>
                 
        </div>
        </div>
    )
}

export default Frequency;