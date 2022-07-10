import './frequency.css';
import {useState} from 'react';
import data from "../../../drawData";

function Frequency(){

    const [mainNumber, setMainNumber]=useState('');
    const [jackNumber, setJackNumber]=useState('');

    //change class
    const[changeClass,setChangeClass]=useState(0);

    const[suitMainNumber, setSuitNumber]=useState([0]);
    const[suitJackNumber, setSuitJackNumber]=useState([0])

    const CheckTheResult=()=>{
        if(mainNumber>0 || jackNumber>0){
            setChangeClass(1)
            if(mainNumber>0){
                let suitNumber=[];
                for(let i=0;i<data.length-1;i++){
                    let firstDraws=data[i].firstNumbers
                    let idValue=data[i].id

                    if(firstDraws.some(el=>el==mainNumber)){
                        suitNumber.push(idValue);
                    }
            }
            setSuitNumber(suitNumber)
            console.log(suitMainNumber)
           
        }
        let suitJack=[];
        if(jackNumber>0){
            for(let i=0;i<data.length-1;i++){
                let secondDraws=data[i].secondNumbers
                let idValue=data[i].id

                if(secondDraws.some(el=>el==jackNumber)){
                    suitJack.push(idValue);
                }
            }
        }
        setSuitJackNumber(suitJack)
    }
    else{
        setChangeClass(0)
    }

}

    return(
        <div className={changeClass?"active":"disactive"}>
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
            <button
            onClick={CheckTheResult}>Sprawdź</button>
        </div>
        <div className={changeClass?"results":"noresults"}>
                <div className='analisisMainNumbers'>
                    <div className='resultMain'> Liczba {mainNumber} występuje w: 
                    <span>{suitMainNumber.length}</span> losowaniach </div>
                   
                </div>
                 <div className='analisisJackNumbers'>
                    <div className='resultJack'> Liczba {jackNumber} występuje w: <span>{suitJackNumber.length}</span> raz/y </div>
                 </div>
                 
        </div>
        </div>
    )
}

export default Frequency;