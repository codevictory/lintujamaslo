import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { currentLanguage } from './atoms/language';
import { Main } from './pages/Main';
import { Registration } from './pages/Registration';
import { Confirmation } from './pages/Confirmation';
import { IntlProvider } from 'react-intl';
import { localization } from './constants/localization';
import { ConfigProvider } from 'antd';
import { Credits } from './components/Credits';

export default function App() {
  const language = useRecoilValue(currentLanguage);

  ConfigProvider.config({
    theme: {
      primaryColor: '#a7ab81',
    },
  });

  return (
    <IntlProvider locale={language} messages={localization[language]}>
      <Router>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/confirmation' exact component={Confirmation} />
          <Route path='/:page' exact component={Main} />
          <Route path='/registration/:id' component={Registration} />
        </Switch>
        <Credits />
      </Router>
    </IntlProvider>
  );
}
