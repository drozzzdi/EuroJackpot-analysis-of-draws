import './pairs.css';
import {useState,useRef} from 'react';
import data from "../../../drawData";

function Pairs(){

    const [mainPairsNumberX, setMainPairsNumberX]=useState('');
    const [mainPairsNumberY, setMainPairsNumberY]=useState('');
    const [jackPairsNumberX, setJackPairsNumberX]=useState('');
    const [jackPairsNumberY, setJackPairsNumberY]=useState('');

    const[bothMainNumbers,setBothMainNumbers]=useState([0]);
    const[bothJackNumbers,setBothJackNumbers]=useState([0]);

    const[mostCommonPairs, setMostCommonPairs]=useState([0]);
    const[jackMostCommonPairs,setJackMostCommonPairs]=useState([0]);

    const[changeClass,setChangeClass]=useState(0);

    const JackResultsPairs=()=>{
        let numbers=[];
        numbers=jackMostCommonPairs;
        if(numbers.length>0){
           
                return(
                    <div className='resultContener'>
                        <div>{numbers[0]}</div>
                        <div>{numbers[1]}</div>
                        <div>{numbers[2]}</div>
                        <div>{numbers[3]}</div>      
                    </div>
                )
            }
            else{
                return(
                    <div className='resultContener'>
                        <div>Nie znaleziono liczby, występującej wyjątkowo często</div>
                    </div>
                )
            }    
    }


    const MainResultsPairs=()=>{
        let numbers=[];
        numbers=mostCommonPairs;
        if(numbers.length>0){
           
                return(
                    <div className='resultContener'>
                        <div>{numbers[0]}</div>
                        <div>{numbers[1]}</div>
                        <div>{numbers[2]}</div>
                        <div>{numbers[3]}</div>      
                    </div>
                )
            }
            else{
                return(
                    <div className='resultContener'>
                        <div>Nie znaleziono liczby, występującej wyjątkowo często</div>
                    </div>
                )
            }    
    }

    
    const CheckPairs=()=>{
        
        if(mainPairsNumberX>0 && mainPairsNumberY>0 || jackPairsNumberX>0 && jackPairsNumberY>0){
            setChangeClass(1)


            //the number of X and Y is given
            if(mainPairsNumberX>0 && mainPairsNumberY>0){
                let suitNumberX=[];
                let suitNumberY=[];

                let numberXDraws=[];

                let randomizationWithBothNumbers=[]
        
                //creating two tables with draws in which the numbers X and Y occurred
                for(let i=0;i<data.length-1;i++){
                    let firstDraws=data[i].firstNumbers
                    let idValue=data[i].id
        
                    if(firstDraws.some(el=>el==mainPairsNumberX)){
                        suitNumberX.push(idValue);
                        numberXDraws.push(firstDraws);
                    }
                    if(firstDraws.some(el=>el==mainPairsNumberY)){
                        suitNumberY.push(idValue)
                        
                    }
                }
                
                let mostCommonNumbers=[];
                for(let y=1;y<51;y++){
                        let number=y;
                        let howOffen=0;
                        for(let z=0;z<numberXDraws.length;z++){
                            let draws=numberXDraws[z];
                            
                            if(draws.some(el=>el==number)){
                                howOffen++;
                                
                            }
                        }
                        if(howOffen>2 && number!=mainPairsNumberX){
                            mostCommonNumbers.push(number)
                        }
                }
                
                setMostCommonPairs(mostCommonNumbers)
               

                //creating an array in which both numbers are drawn together
                for(let j=0;j<suitNumberX.length;j++){
                    if(suitNumberX.some(el=>el==suitNumberY[j])){
                        randomizationWithBothNumbers.push(suitNumberY[j])
                    }
                }
            }
        

        if(jackPairsNumberX>0 && jackPairsNumberY>0){
            let suitNumberX=[];
            let suitNumberY=[];

            let numberXDraws=[];

            let randomizationWithBothNumbers=[]
    
            for(let i=0;i<data.length-1;i++){
                let secondDraws=data[i].secondNumbers
                let idValue=data[i].id
    
                if(secondDraws.some(el=>el==jackPairsNumberX)){
                    suitNumberX.push(idValue);
                    numberXDraws.push(secondDraws);
                    
                }
                if(secondDraws.some(el=>el==jackPairsNumberY)){
                    suitNumberY.push(idValue)
                    
                }
            }

            let mostJackCommonNumbers=[];
                for(let y=1;y<13;y++){
                        let number=y;
                        let howOffen=0;
                        console.log(numberXDraws)
                        
                        for(let z=0;z<numberXDraws.length;z++){
                            let draws=numberXDraws[z];
                            console.log(draws)
                            console.log('dziala')
                            
                            if(draws.some(el=>el==number)){
                                howOffen++;   
                            }
                        }
                        if(howOffen>2 && number!=jackPairsNumberX){
                            mostJackCommonNumbers.push(number)
                        }
                }
                console.log(mostJackCommonNumbers)
                setJackMostCommonPairs(mostJackCommonNumbers)


            for(let j=0;j<suitNumberX.length;j++){
                if(suitNumberX.some(el=>el==suitNumberY[j])){
                    randomizationWithBothNumbers.push(suitNumberY[j])
                }
            }
            setBothJackNumbers(randomizationWithBothNumbers)
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
                    <div className='resultMain'> Liczba {mainPairsNumberX} występuje z liczbą {mainPairsNumberY} w : 
                    <span> {bothMainNumbers.length}</span> losowaniach </div>
                    <p>Najczęściej występujące liczby z liczbą {mainPairsNumberX} to: </p>
                    <div>{MainResultsPairs()}</div>
                   
                </div>
                 <div className='analisisJackNumbers'>
                    <div className='resultJack'> Liczba {jackPairsNumberX} występuje z liczbą {jackPairsNumberY} w : 
                    <span> {bothJackNumbers.length}</span> losowaniach </div>
                    <p>Najczęściej występujące liczby z liczbą {jackPairsNumberX} to: </p>
                    <div>{JackResultsPairs()}</div>
                 </div>
                 
            </div>
        </div>
    )
}

export default Pairs;