import "./styles/navBar.scss";
import { Link } from 'react-router-dom';
import { LanguagePicker } from './LanguagePicker';
import { Button, Menu } from 'antd';

export const NavBar = () => {
    return (
        <Menu className="NavBar" mode="horizontal">
            <Menu.Item><Link to="/menu">Menu</Link></Menu.Item>
            <Menu.Item><Link to="/program">Program</Link></Menu.Item>
            <Menu.Item><Link to="/program">Info</Link></Menu.Item>
            <Menu.Item><Button type="primary">asd</Button></Menu.Item>
            <Menu.Item>
                <LanguagePicker />
            </Menu.Item>
        </Menu>
    )
}