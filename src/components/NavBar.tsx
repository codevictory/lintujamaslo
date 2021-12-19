import './NavBar.scss';
import { Link } from 'react-router-dom';
import { LanguagePicker } from './LanguagePicker';
import { Button, Menu } from 'antd';
import { Diamond } from './Diamond';

export const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to='/menu'>Menu</Link>
      <Diamond />
      <Link to='/program'>Program</Link>
      <Diamond />
      <Link to='/program'>Info</Link>
    </div>
  );
};
