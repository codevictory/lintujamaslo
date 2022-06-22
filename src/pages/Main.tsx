import './Main.scss';

import { Link, useParams, useLocation } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { NavBar } from '../components/NavBar';
import { Program } from '../components/Program';
import { NotFound } from '../components/NotFound';
import { LanguagePicker } from '../components/LanguagePicker';
import { FormattedMessage } from 'react-intl';
import { DateAndPlace } from '../components/DateAndPlace';
import { Info } from '../components/Info';
import { getLangFromSearch } from './utils';
import { useSetRecoilState } from 'recoil';
import { currentLanguage } from '../atoms/language';
import { useEffect } from 'react';

interface MainParams {
  page: string;
}

export const Main = () => {
  const { page } = useParams<MainParams>();
  const { search } = useLocation();
  const setlang = useSetRecoilState(currentLanguage);

  useEffect(() => {
    const lang = getLangFromSearch(search);
    if (lang !== '') setlang(lang);
  }, [search, setlang]);

  return (
    <div className='Main'>
      <LanguagePicker />
      <p className='extraText'>
        <FormattedMessage id='main.saveTheLink' />
      </p>
      <section className='Main-container'>
        <article className='logo-container'>
          <Link to='/'>
            <h1 className='Main-title'>
              <FormattedMessage id='common.lintu' />
            </h1>
            <h2 className='Main-and'>
              <span> &amp; </span>
            </h2>
            <h1 className='Main-title'>
              <FormattedMessage id='common.maslo' />
            </h1>
          </Link>
        </article>
        <article>
          <NavBar />
        </article>
        {page ? (
          <article className='content'>
            {page === 'menu' ? (
              <Menu />
            ) : page === 'program' ? (
              <Program />
            ) : page === 'info' ? (
              <Info />
            ) : (
              <NotFound />
            )}
          </article>
        ) : (
          <article className='Landing-container'>
            <img src='landing.jpg' className='Landing-picture' alt='Landing' />
            <i>Straník, Žilina, Slovakia</i>
            <DateAndPlace size='large' />
          </article>
        )}
      </section>
      <p className='extraText'>
        <FormattedMessage id='main.welcome' />
      </p>
    </div>
  );
};
