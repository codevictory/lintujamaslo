import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './Confirmation.scss';

export const Confirmation = () => {
  return (
    <div className='Confirmation'>
      <h1>
        <FormattedMessage id='confirmation.title' />
      </h1>
      <p>
        <FormattedMessage id='confirmation.text' />
      </p>
      <Link to='/'>
        &gt;{' '}
        <span className='infoLink'>
          <FormattedMessage id='confirmation.link' />
        </span>{' '}
        &lt;
      </Link>
    </div>
  );
};
