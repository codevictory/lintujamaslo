import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './Program.scss';

export const Program = () => {
  return (
    <section className='Program'>
      <h1>
        <FormattedMessage id='main.program' />
      </h1>
      <h2>
        <FormattedMessage id='main.toBeDecided' />
      </h2>
    </section>
  );
};
