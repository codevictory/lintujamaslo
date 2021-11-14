import "./styles/registration.scss";

import { Header } from '../components/Header'
import { RegForm } from '../components/RegForm'

export const Registration = () => {
    return (
        <>
            <Header />
            <div className="Registration-form">
                <RegForm />
            </div>
        </>
    )
}