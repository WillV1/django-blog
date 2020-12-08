import NavBar from './components/NavBar';
import routes from './config/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      {routes}
    </div>
  );
}

export default App;
