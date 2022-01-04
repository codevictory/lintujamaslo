import './Registration.scss';
import { FormattedMessage } from 'react-intl';

import RegForm from '../components/RegForm';
import { RegistrationHeader } from '../components/RegistrationHeader';
import { LanguagePicker } from '../components/LanguagePicker';
import { Link } from 'react-router-dom';

export const Registration = () => {
  return (
    <>
      <RegistrationHeader />
      <LanguagePicker />
      <main className='Registration'>
        <div className='Registration-main'>
          <h1 className='Registration-welcome'>
            <FormattedMessage id='registration.welcome' />
          </h1>
          <h1>
            <FormattedMessage id='registration.datetime' />
          </h1>
          <h2>
            <FormattedMessage id='registration.place' />
          </h2>
        </div>
        <div className='Registration-desc'>
          <p>
            <FormattedMessage id='registration.questions' />
          </p>
          <p>
            <FormattedMessage id='registration.about' />{' '}
            <Link to='/'>lintujamaslo.net</Link>
          </p>
          <p>
            &gt; <FormattedMessage id='registration.saveTheLink' /> &lt;
          </p>
          <p>
            <FormattedMessage id='registration.fillInBefore' />
          </p>
        </div>
        <div className='Registration-form'>
          <RegForm />
        </div>
      </main>
    </>
  );
};
