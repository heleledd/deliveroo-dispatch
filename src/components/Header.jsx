import '../styles/header.css';
import { RotateCcw } from 'lucide-react';
import deliverooLogo from '../images/deliveroo-icon.png';

export default function Header({ restartGame }) {
    return (
        <header>
            <div className="left-section">
                <img src={deliverooLogo} alt="dispatch logo" className="headerImage" />
                <span className="header-title">deliveroo dispatch</span>
            </div>

            <button className="restart-btn" onClick={restartGame}>
                <RotateCcw />
            </button>
        </header>
    )
}