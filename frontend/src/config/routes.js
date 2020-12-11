import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import NewPost from '../pages/NewPost';
import Profile from '../pages/Profile';
import BlogPost from '../pages/BlogPost';
import Dashboard from '../pages/Dashboard';
import AddProfile from '../pages/AddProfile';
import Home from '../pages/Home';


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/register' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/addpost' component={NewPost} />
      <Route path='/addprofile' component={AddProfile} />
      <Route path="/profile" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/post/:id" component={BlogPost} />
    </Switch>
  </Router>
)