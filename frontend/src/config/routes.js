import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import NewPost from '../pages/NewPost';
import Profile from '../pages/Profile';
import BlogPost from '../pages/BlogPost';
import Articles from '../pages/Articles';
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
      <Route path="/articles" component={Articles} />
      <Route path="/post/:id" component={BlogPost} />
    </Switch>
  </Router>
)