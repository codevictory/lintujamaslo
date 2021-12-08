import { FormattedMessage } from 'react-intl';
import './Header.scss';

export const Header = () => {
    return (
        <header className='App-header'>
            <h1>
                <FormattedMessage id='common.lintu' />
                <span> &amp; </span>
                <FormattedMessage id='common.maslo' />
            </h1>
            <svg className="diamondIcon" width="9" height="9" fill="#c1a57c" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z" />
            </svg>
            <div className='dateAndPlace'>
                <h2>
                    <FormattedMessage id='common.datetime' />
                </h2>

                <h3>
                    <FormattedMessage id='common.place' />
                </h3>
            </div>
        </header>
    );
};
