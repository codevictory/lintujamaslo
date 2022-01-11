import './Credits.scss';

import { FormattedMessage } from 'react-intl';

export const Credits = () => {
  return (
    <div className='Credits'>
      <span>
        <a href='https://github.com/codevictory/lintujamaslo/'>
          <FormattedMessage id='common.sourceCode' /> codevictory
        </a>
      </span>
      <span className='separator'>|</span>
      <span>
        <FormattedMessage id='common.design' /> Jana Černá
      </span>
    </div>
  );
};
