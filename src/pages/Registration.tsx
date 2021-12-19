import './Registration.scss';
import { FormattedMessage } from 'react-intl';

import { RegForm } from '../components/RegForm';
import { RegistrationHeader } from '../components/RegistrationHeader';
import { LanguagePicker } from '../components/LanguagePicker';

export const Registration = () => {
  return (
    <>
      <RegistrationHeader />
      <LanguagePicker />
      <main className='Registration'>
        <div className='Registration-main'>
          <h1>
            <FormattedMessage id='registration.welcome' />
            <br />
            <FormattedMessage id='common.datetime' />
          </h1>
          <h2>
            <FormattedMessage id='common.place' />
          </h2>
        </div>
        <div className='Registration-desc'>
          <h2>
            <FormattedMessage id='registration.questions' />
          </h2>
          <h2>
            <FormattedMessage id='registration.about' />
          </h2>
          <h2>
            <FormattedMessage id='registration.saveTheLink' />
          </h2>
          <h2>
            <FormattedMessage id='registration.fillInBefore' />
          </h2>
        </div>
        <div className='Registration-form'>
          <RegForm />
        </div>
      </main>
    </>
  );
};
