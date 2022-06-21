import './header.css';
import img from '../../images/kule.jpg';

function Header(){
    return(
        <div className="containerHeader">
            <img src={img} alt=""/>
        </div>
    )
}

export default Header;