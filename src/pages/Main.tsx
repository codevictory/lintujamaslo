import './Main.scss';

import { Link, useParams } from 'react-router-dom';
import { Menu } from '../components/Menu';
import { NavBar } from '../components/NavBar';
import { Program } from '../components/Program';
import { NotFound } from '../components/NotFound';
import { LanguagePicker } from '../components/LanguagePicker';
import { FormattedMessage } from 'react-intl';
import { DateAndPlace } from '../components/DateAndPlace';
import { Info } from '../components/Info';

interface MainParams {
  page: string;
}

export const Main = () => {
  const { page } = useParams<MainParams>();

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
          <article>
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
