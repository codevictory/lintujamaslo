import { FormattedMessage } from 'react-intl';
import './Info.scss';

export const Info = () => {
  return (
    <section className='Info'>
      <h1>
        <FormattedMessage id='main.info' />
      </h1>
      <h2>
        <FormattedMessage id='main.toBeDecided' />
      </h2>
    </section>
  );
};
