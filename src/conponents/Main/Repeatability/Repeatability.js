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

    //how often the number X appears after the number Y
    const [howOffenMain,setHowOffenMain]=useState(0);
    const [howOffenJack,setHowOffenJack]=useState(0);
    const [mostOffenMainNumbers,setMostOffenMainNumbers]=useState([]);
    const [mostOffenJackNumbers,setMostOffenJackNumbers]=useState([]);

    //change class
    const[changeClass,setChangeClass]=useState(1);



    const CheckTheResult=()=>{
        
        //checking if the main or jack numberX and numberY selected by the user appeared in the id[i] draw
        if(mainNumberX>0 && mainNumberY>0 || jackNumberX>0 && jackNumberY>0){

            setChangeClass(1)
            //chacking main
            if(mainNumberX>0 && mainNumberY>0){
                let suitNumberX=[];
                let suitNumberY=[];
                let howOffenRepeatedmain=0;
                //a table containing all the numbers in the draw with the number Y
                let everyNumbersSuitDraws=[];
                //table of numbers that fell after drawing the number Y
                let beforDrawsWithYNumber=[];

                setHowOffenMain(0)
        
                for(let i=0;i<data.length-1;i++){
                    let firstDraws=data[i].firstNumbers
                    let idValue=data[i].id
        
                    if(firstDraws.some(fir=>fir==mainNumberX)){
                        suitNumberX.push(idValue);
                    }
                    if(firstDraws.some(fir=>fir==mainNumberY)){
                        suitNumberY.push(idValue)
                        everyNumbersSuitDraws.push(firstDraws);
                        beforDrawsWithYNumber.push(data[i+1].firstNumbers)
                       
                    }
                }
            
                setDrawsWithNumbersX(suitNumberX);
                setDrawsWithNumbersY(suitNumberY);

                //calculation of the most common numbers that appeared after the draw with the number Y
                let mostOffenNr=[]
                for(let j=1;j<51;j++){
                    
                    let howOften=0;
                    

                    for(let z=0;z<everyNumbersSuitDraws.length;z++){
                        let whatNumbers=beforDrawsWithYNumber[z];
                        
                        if(whatNumbers.some(el=>el==j)){
                            howOften++;
                        }
                        
                    }
                    
                    if(howOften>3){
                        mostOffenNr.push(j);
                        
                    }  

                }
                setMostOffenMainNumbers([mostOffenNr])
                

                //checking how often the number X appears after the number Y in main numbers

                for(let i=0;i<suitNumberX.length;i++){

                    let analizeNumberX=suitNumberX[i]-1;

                    if(suitNumberY.some(el=>el==analizeNumberX)){
                        howOffenRepeatedmain++;
                        setHowOffenMain(howOffenRepeatedmain)
                    }
                }
            }
            //chacking jack
            if(jackNumberX>0 && jackNumberY>0){

            let suitJackNumberX=[];
            let suitJackNumberY=[];
            let howOffenRepeatedJack=0;
             //a table containing all the numbers in the draw with the number Y
             let everyNumbersSuitDrawsJ=[];
             //table of numbers that fell after drawing the number Y
             let beforDrawsWithYNumberJ=[];
           

            setHowOffenJack(0)
    
                for(let i=0;i<data.length-1;i++){

                    let firstDraws=data[i].secondNumbers
                    let idValue=data[i].id
                
                   if(firstDraws.some(fir=>fir==jackNumberX)){
                    suitJackNumberX.push(idValue)
                   }

                   if(firstDraws.some(fir=>fir==jackNumberY)){
                    suitJackNumberY.push(idValue)
                    everyNumbersSuitDrawsJ.push(firstDraws);
                    beforDrawsWithYNumberJ.push(data[i+1].secondNumbers)
                   }
                }

                setDrawsWithJackNumbersX(suitJackNumberX)
                setDrawsWithJackNumbersY(suitJackNumberY)

                //calculation of the most common numbers that appeared after the draw with the number Y
                let mostOffenNrJ=[]
                for(let j=1;j<12;j++){
                    
                    let howOften=0;
                    

                    for(let z=0;z<everyNumbersSuitDrawsJ.length;z++){
                        let whatNumbersJ=beforDrawsWithYNumberJ[z];
                        
                        if(whatNumbersJ.some(el=>el==j)){
                            howOften++;
                        } 
                    }
                    
                    if(howOften>4){
                        mostOffenNrJ.push(j);
                    }  
                }
                setMostOffenJackNumbers([mostOffenNrJ])
                console.log(mostOffenJackNumbers)
                

                //checking how often the number X appears after the number Y in two additional numbers
                
                for(let i=0;i<suitJackNumberX.length;i++){
                    let analizeNumberX=suitJackNumberX[i]-1;

                    if(suitJackNumberY.some(el=>el==analizeNumberX)){
                        howOffenRepeatedJack++;
                        setHowOffenJack(howOffenRepeatedJack)
                    }
                }
            }
            
        }
        else{
            setChangeClass(0);
        }
        
    }

    return(
        <div className={changeClass?"active":"disactive"}>
            <div className='containerRepeatability'>
            <h2>Wystąpienie numeru X po numerze Y w kolejnym losowaniu</h2>
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
            
            <h3 className='secondSection'>Analiza Jackpota 1-12:</h3>
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
                <div className={changeClass?"noNumbers":"active"}>Nie wybrałeś żadnych liczb!</div>
            </div>
            <button 
            className="RepeatButton"
            onClick={CheckTheResult}>Sprawdź</button>
            </div>
            <div className={changeClass?"results":"noresults"}>
                <div className='analisisMainNumbers'>
                    <div className='resultMain'> Liczba {mainNumberX} występuje po liczbie {mainNumberY}: <span>{howOffenMain}</span> raz/y </div>
                    <p>Najczęściej występujące liczby po liczbie {mainNumberY} w kolejnym losowaniu to: </p>
                   <div>{mostOffenMainNumbers}</div>
                </div>
                 <div className='analisisJackNumbers'>
                    <div className='resultJack'> Liczba {jackNumberX} występuje po liczbie {jackNumberY}: <span>{howOffenJack}</span> raz/y </div>
                    <p>Najczęściej występujące liczby po liczbie {jackNumberY} w kolejnym losowaniu to: </p>
                    <div>{mostOffenJackNumbers}</div>
                 </div>
                 
            </div>
        </div>
    )
}

export default Repeatability;