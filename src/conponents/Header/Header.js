import './header.css';
import img from '../../images/kule.jpg';

function Header(){
    return(
        <div className="containerHeader">
            <img src={img} alt=""/>
            <h2 className='headerH2'>EuroJacpot - analiza liczb</h2>
        </div>
    )
}

export default Header;