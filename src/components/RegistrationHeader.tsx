import { FormattedMessage } from 'react-intl';
import { DateAndPlace } from './DateAndPlace';
import { Diamond } from './Diamond';
import './RegistrationHeader.scss';

export const RegistrationHeader = () => {
  return (
    <header className='App-header'>
      <h1>
        <FormattedMessage id='common.lintu' />
        <span> &amp; </span>
        <FormattedMessage id='common.maslo' />
      </h1>
      <Diamond />
      <DateAndPlace />
    </header>
  );
};
