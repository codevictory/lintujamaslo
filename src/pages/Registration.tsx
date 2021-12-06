import "./styles/registration.scss";

import { Header } from '../components/Header'
import { RegForm } from '../components/RegForm'

export const Registration = () => {
    return (
        <>
            <div className="Registration-form">
                <RegForm />
            </div>
        </>
    )
}