import NavBar from './components/NavBar';
import routes from './config/routes';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
      <NavBar />
      {routes}
      </div>
    </Provider>
    
  );
}

export default App;
