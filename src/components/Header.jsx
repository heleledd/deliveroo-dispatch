import '../styles/Header.css';
import dispatchLogo from '../images/cm3117-thumbnail.png';

export default function Header() {
    return (
        <header>
            <img src={dispatchLogo} alt="dispatch logo" className="headerImage" />
            <span className="header-title">Deliveroo Dispatch</span>
        </header>
    )
}