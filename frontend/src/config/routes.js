import { Switch, Route} from 'react-router-dom';
import PrivateRoute from '../common/PrivateRoute';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import NewPost from '../pages/NewPost';
import Profile from '../pages/Profile';
import BlogPost from '../pages/BlogPost';
import Articles from '../pages/Articles';
import AddProfile from '../pages/AddProfile';
import DashBoard from '../pages/DashBoard';
import About from '../pages/About';
import Home from '../pages/Home';


export default (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path='/about' component={About} />
      <Route path='/register' component={Signup} />
      <Route path='/login' component={Login} />
      <PrivateRoute path='/addpost' component={NewPost} />
      <PrivateRoute path='/addprofile' component={AddProfile} />
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/articles" component={Articles} />
      <PrivateRoute path='/dashboard' component={DashBoard} />
      <Route path="/post/:id" component={BlogPost} />
    </Switch>
)