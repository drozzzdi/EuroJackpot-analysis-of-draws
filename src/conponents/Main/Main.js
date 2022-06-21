import './main.css';
import Repeatability from './Repeatability/Repeatability';
import Pairs from './Pairs/Pairs';
import Frequency from './Frequency/Frequency';

function Main(){
    return(
        <section className="containerMain">
            <Repeatability/>
            <Pairs/>
            <Frequency/>
        </section>
    )
}

export default Main;