import "./Registration.scss";
import { FormattedMessage } from 'react-intl';
import mainPicture from "../img/lintujamaslo.jpg"

import { RegForm } from '../components/RegForm'

export const Registration = () => {
    return (
        <main className="Registration">
            <div className="Registration-main">
                <img src={mainPicture} />
                <p><FormattedMessage id="registration.welcome" /></p>
                <p><FormattedMessage id="registration.questions" /></p>

            </div>
            <div className="Registration-form">
                <RegForm />
            </div>
        </main>
    )
}