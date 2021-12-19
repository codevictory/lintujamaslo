import './DateAndPlace.scss';

import { FormattedMessage } from 'react-intl';

export const DateAndPlace = () => {
  return (
    <div className='dateAndPlace'>
      <h2>
        <FormattedMessage id='common.datetime' />
      </h2>

      <h3>
        <FormattedMessage id='common.place' />
      </h3>
    </div>
  );
};
