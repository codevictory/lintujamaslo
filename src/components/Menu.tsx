import { FormattedMessage } from 'react-intl';
import './Menu.scss';

export const Menu = () => {
  return (
    <section className='Menu'>
      <h1>
        <FormattedMessage id='main.menu' />
      </h1>
      <p className='subText'>
        <FormattedMessage id='main.program.beingUpdated' />
      </p>
    </section>
  );
};
