import { FormattedMessage } from 'react-intl';
import "./Header.scss"

export const Header = () => {
    return (
        <header className="App-header">
            <h1><FormattedMessage id="common.title" /></h1>
            <p><i><FormattedMessage id="common.subtitle" /></i></p>
        </header>
    )
}