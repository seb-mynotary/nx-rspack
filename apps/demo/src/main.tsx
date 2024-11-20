import './main.scss'
import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import {environment} from "./env";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div className='test'>Hello {environment.currentEnvFile} !</div>
  </StrictMode>
);
