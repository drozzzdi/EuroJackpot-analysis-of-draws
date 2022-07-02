import './repeatability.css';
import {useState} from "react";
import data from "../../../drawData";

function Repeatability(){

    const [mainNumberX, setMainNumberX]=useState('');
    const [mainNumberY, setMainNumberY]=useState('');
    const [jackNumberX, setJackNumberX]=useState('');
    const [jackNumberY, setJackNumberY]=useState('');

    //draws with numbers selected by the user
    const [drawsWithNumbersX, setDrawsWithNumbersX]=useState([]);
    const [drawsWithNumbersY, setDrawsWithNumbersY]=useState([]);
    const [drawsWithJackNumbersX, setDrawsWithJackNumbersX]=useState([]);
    const [drawsWithJackNumbersY, setDrawsWithJackNumbersY]=useState([]);

    const CheckTheResult=()=>{

        //checking if the main or jack numberX and numberY selected by the user appeared in the id[i] draw
        if(mainNumberX>0 && mainNumberY>0 || jackNumberX>0 && jackNumberY>0){

            if(mainNumberX>0 && mainNumberY>0){
                let suitNumberX=[];
                let suitNumberY=[];
        
                for(let i=0;i<data.length;i++){
                    let firstDraws=data[i].firstNumbers
                    let idValue=data[i].id
        
                    firstDraws.some(fir=>fir==mainNumberX)?suitNumberX.push(idValue):console.log('')  
                    firstDraws.some(fir=>fir==mainNumberY)?suitNumberY.push(idValue):console.log('')
                }
                setDrawsWithNumbersX(suitNumberX)
                console.log(suitNumberX)
                setDrawsWithNumbersY(suitNumberY)
                console.log(suitNumberY)
            }
            else{
                let suitJackNumberX=[];
            let suitJackNumberY=[];
    
            for(let i=0;i<data.length;i++){
                let firstDraws=data[i].firstNumbers
                let idValue=data[i].id
    
                firstDraws.some(fir=>fir==jackNumberX)?suitJackNumberX.push(idValue):console.log('')  
                firstDraws.some(fir=>fir==jackNumberY)?suitJackNumberY.push(idValue):console.log('')
            }
            setDrawsWithJackNumbersX(suitJackNumberX)
            console.log(suitJackNumberX)
            setDrawsWithJackNumbersY(suitJackNumberY)
            console.log(suitJackNumberY)
            }
            
        }
        else{
            console.log('wybierz liczby')
        }
        
    }
    
    
    

    return(
        <div className="containerRepeatability">
            <h2>Wystąpienie numaru X po numerze Y w kolejnym losowaniu</h2>
            <h3>Analiza głównych liczb 1-50:</h3>
            <div className="flexConteiner">
                <p className="repeatNumberX">Analizowana liczba X:</p> 
                <input 
                type="number" 
                placeholder="1-50" 
                className="chooseNumberRepeatX" 
                min="1" 
                max="50"
                value={mainNumberX}
                onChange={(e)=>setMainNumberX(e.target.value)}
                ></input>
            </div>
            <div className="flexConteiner">
                <p className="repeatNumberY">Analizowana liczba Y:</p> 
                <input 
                type="number" 
                placeholder="1-50" 
                className="chooseNumberRepeatY" 
                min="1" 
                max="50"
                value={mainNumberY}
                onChange={(e)=>setMainNumberY(e.target.value)}
                ></input>
            </div>
            <h3>Analiza Jackpota 1-12:</h3>
            <div className="jackpot">
                <div className="flexConteiner">
                    <p className="repeatNumberX">Analizowana liczba X:</p> 
                    <input 
                    type="number" 
                    placeholder="1-12" 
                    className="chooseNumberRepeatX" 
                    min="1" 
                    max="50"
                    value={jackNumberX}
                    onChange={(e)=>setJackNumberX(e.target.value)}
                    ></input>
                </div>
                <div className="flexConteiner">
                    <p className="repeatNumberY">Analizowana liczba Y:</p> 
                    <input 
                    type="number" 
                    placeholder="1-12" 
                    className="chooseNumberRepeatY" 
                    min="1" 
                    max="50"
                    value={jackNumberY}
                    onChange={(e)=>setJackNumberY(e.target.value)}
                    ></input>
                </div>
            </div>
            
            <button 
            className="RepeatButton"
            onClick={CheckTheResult}>Sprawdź</button>
        </div>
    )
}

export default Repeatability;