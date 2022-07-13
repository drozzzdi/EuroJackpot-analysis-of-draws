import {useState} from 'react';
import data from "../../../drawData";
import {active, noActive} from './../../../actions';
import{ useDispatch,useSelector} from 'react-redux';


function Result(props){
    const changeClass=useSelector(state=>state.changeClass);
    const dispatch=useDispatch();
    //change class

    const[suitMainNumber, setSuitNumber]=useState([0]);
    const[suitJackNumber, setSuitJackNumber]=useState([0]);

    const CheckTheResult=()=>{
        if(props.main>0 || props.jack>0){
            dispatch(active())
            let suitNumber=[];

        if(props.main>0){
        
        for(let i=0;i<data.length-1;i++){
            let firstDraws=data[i].firstNumbers
            let idValue=data[i].id

            if(firstDraws.some(el=>el==props.main)){
                suitNumber.push(idValue);
            }
        }
         setSuitNumber(suitNumber)
        }
        let suitJack=[];
        if(props.jack>0){
            for(let i=0;i<data.length-1;i++){
                let secondDraws=data[i].secondNumbers
                let idValue=data[i].id

                if(secondDraws.some(el=>el==props.jack)){
                    suitJack.push(idValue);
                }
            }
        
        setSuitJackNumber(suitJack)
        }
        
    }
    else{
        dispatch(noActive())
    }

}
    
    return(
        <div >
             <button onClick={CheckTheResult}>Sprawdź{changeClass}</button> 
        </div>
    )
}
export default Result;