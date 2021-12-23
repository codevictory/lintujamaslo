import './DateAndPlace.scss';

import { FormattedMessage } from 'react-intl';

export const DateAndPlace = (props: { size: string }) => {
  return (
    <div className='DateAndPlace'>
      <h2 className={props.size}>
        <FormattedMessage id='common.datetime' />
      </h2>

      <h3 className={props.size}>
        <FormattedMessage id='common.place' />
      </h3>
    </div>
  );
};
