import "./Main.scss";

import { useParams } from "react-router-dom";
import { Menu } from '../components/Menu';
import { NavBar } from '../components/NavBar';
import { Program } from '../components/Program';
import { NotFound } from '../components/NotFound';

interface MainParams {
    page: string
}

export const Main = () => {
    const { page } = useParams<MainParams>()

    return (
        <section className="Main">
            <NavBar />
            {page === "menu" ? <Menu /> : page === "program" ? <Program /> : <NotFound />}
        </section>
    )
}