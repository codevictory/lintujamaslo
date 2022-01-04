import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import './index.scss';
import App from './App';
import { ConfigProvider } from 'antd';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
