import { FormattedMessage } from 'react-intl';
import './Menu.scss';

export const Menu = () => {
  return (
    <section className='Menu'>
      <h1>
        <FormattedMessage id='main.menu' />
      </h1>
      <h2>
        <FormattedMessage id='main.toBeDecided' />
      </h2>
    </section>
  );
};
