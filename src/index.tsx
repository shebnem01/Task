import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GeneralProvider } from './context';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GeneralProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <App />
  </GeneralProvider>
);

reportWebVitals();
