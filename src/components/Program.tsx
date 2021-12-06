import { Link } from 'react-router-dom';
import './Program.scss';

export const Program = () => {
    return (
        <section>
            <h1>Program</h1>
            <article>
                <h2>12:00</h2>
                <h3>Speech</h3>
                <p>Boring BS. Lorem ipsum dolor sit amet.</p>
                <h3>Lunch</h3>
                <p>
                    Eating yummy yum.
                    <i>
                        <Link to='/menu'>To menu</Link>
                    </i>
                </p>
            </article>
            <article>
                <h2>14:00</h2>
                <h3>Games</h3>
                <p>Activity lol.</p>
                <p>Be active.</p>
                <h3>More something</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <h3>More more more</h3>
            </article>
            <article>
                <h2>23:00</h2>
                <h3>More something</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <h3>More more more</h3>
                <h3>More something</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <h3>More more more</h3>
            </article>
        </section>
    );
};
