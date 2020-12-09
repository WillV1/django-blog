import NavBar from './components/NavBar';
import routes from './config/routes';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'; 
import Alerts from './components/Alerts';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Alert options

const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div>
        <NavBar />
        {routes}
        </div>
      </AlertProvider>
      
    </Provider>
    
  );
}

export default App;
