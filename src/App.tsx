import './App.css';
import { Header } from "./components/header";
import { Registration } from './components/registration';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header />
          </div>
        </Route>
        <Route path="/registration/:id" component={Registration} />
      </Switch>
    </Router>
  );
}
