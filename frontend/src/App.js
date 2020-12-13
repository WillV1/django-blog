import NavBar from './components/NavBar';
import routes from './config/routes';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'; 
import Alerts from './components/Alerts';
import { loadUser } from './actions/auth';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';

//Alert options

const alertOptions = {
  timeout: 3000,
  position: 'top center'
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  })

  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <div>
        <Router>
          <NavBar />
          <Alerts />
          {routes}
        </Router>
        </div>
      </AlertProvider>
      
    </Provider>
    
  );
}

export default App;
