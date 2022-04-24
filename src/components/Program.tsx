import { FormattedMessage } from 'react-intl';
import './Program.scss';

export const Program = () => {
  return (
    <section className='Program'>
      <h1>
        <FormattedMessage id='main.program' />
      </h1>
      <h2>12:00</h2>
      <p>
        <FormattedMessage id='main.program.consecration' />
      </p>
      <h2>21:00</h2>
      <p>
        <FormattedMessage id='main.program.consert' />
      </p>

      <p className='subText'>
        <FormattedMessage id='main.program.beingUpdated' />
      </p>
    </section>
  );
};
