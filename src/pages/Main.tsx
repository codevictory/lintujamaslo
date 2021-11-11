import "./styles/main.css";

import { useParams } from "react-router-dom";
import { Menu } from '../components/Menu';
import { Header } from '../components/Header';
import { SideNav } from '../components/SideNav';
import { Program } from '../components/Program';
import { NotFound } from '../components/NotFound';

interface MainParams {
    page: string
}

export const Main = () => {
    const { page } = useParams<MainParams>()

    return (
        <>
            <Header />
            <section className="App-content">
                <SideNav />
                {page === "menu" ? <Menu /> : page === "program" ? <Program /> : <NotFound />}
                <div style={{ width: 333 }} />
            </section>
        </>
    )
}