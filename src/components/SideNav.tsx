import "./styles/sideNav.css";
import { Link } from 'react-router-dom';

export const SideNav = () => {
    return (
        <aside className="SideNav">
            <ul>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/program">Program</Link></li>
            </ul>
        </aside>
    )
}