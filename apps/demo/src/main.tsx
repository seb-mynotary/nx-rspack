import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {environment} from "./env";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div>Hello {environment.currentEnvFile} !</div>
  </StrictMode>
);
