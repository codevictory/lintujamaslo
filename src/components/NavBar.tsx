import './NavBar.scss';
import { Link } from 'react-router-dom';
import { Diamond } from './Diamond';
import { FormattedMessage } from 'react-intl';

export const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to='/menu'>
        <FormattedMessage id='main.menu' />
      </Link>
      <Diamond />
      <Link to='/program'>
        <FormattedMessage id='main.program' />
      </Link>
      <Diamond />
      <Link to='/info'>
        <FormattedMessage id='main.info' />
      </Link>
    </div>
  );
};
