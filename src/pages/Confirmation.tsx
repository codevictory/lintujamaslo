import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { currentLanguage } from '../atoms/language';
import './Confirmation.scss';
import { getLangFromSearch } from './utils';

export const Confirmation = () => {
  const { search } = useLocation();
  const setlang = useSetRecoilState(currentLanguage);

  const lang = getLangFromSearch(search);
  if (lang != '') setlang(lang);

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
