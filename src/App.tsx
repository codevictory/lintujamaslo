import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Main } from './pages/Main';
import { Registration } from './pages/Registration';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:page">
          <div className="App">
            <Main />
          </div>
        </Route>
        <Route path="/registration/:id" component={Registration} />
        <Redirect from="/" to="/program" />
      </Switch>
    </Router >
  );
}
