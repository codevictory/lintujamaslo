import { Link } from 'react-router-dom';
import "./styles/program.css";

export const Program = () => {
    return (
        <article>
            <h1>Program</h1>
            <table>
                <tr>
                    <th></th>
                    <th>12:00</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Speech</td>
                    <td>Boring BS. Lorem ipsum dolor sit amet.</td>
                    <td>Veikko</td>
                </tr>
                <tr>
                    <td>Lunch</td>
                    <td>Eating yummy yum.</td>
                    <td><Link to="/menu" >To menu</Link></td>
                </tr>
                <tr>
                    <th></th>
                    <th>14:00</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Games</td>
                    <td>Activity lol.</td>
                    <td>Be active.</td>
                </tr>
                <tr>
                    <td>More something</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>More more more</td>
                </tr>
                <tr>
                    <th></th>
                    <th>23:00</th>
                    <th></th>
                </tr>
                <tr>
                    <td>More something</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>More more more</td>
                </tr>
                <tr>
                    <td>More something</td>
                    <td>Lorem ipsum dolor sit amet.</td>
                    <td>More more more</td>
                </tr>
            </table>
        </article>
    )
}