import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { withState } from './hotel-context';
import DashBoard from './components/DashBoard/DashBoard';
import Auth from './components/Auth/Auth';
import Hotels from './components/Hotels/Hotels';
import FullHotel from './components/Hotels/FullHotel/FullHotel';
import BookHotel from './components/BookHotel/BookHotel';
import Orders from './components/Orders/Orders';
import Error from './components/Error/Error';
import { SET_AUTH_DATA } from './store/actionTypes';
import './App.css';


function PrivateRoutes({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />}
    />
  );
};

function PublicRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated === false
        ? <Component {...props} />
        : <Redirect to="/" />}
    />
  );
};

class App extends React.Component {

  componentDidMount() {
    const user = localStorage.getItem('user');
    user && this.props.dispatch({ type: SET_AUTH_DATA, user: user });
    window.onunload = () => {
      localStorage.clear();
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <DashBoard />
          {this.props.state.error !== null
            ? <Error />
            : <Switch>
              <PublicRoute path='/auth' isAuthenticated={this.props.state.user ? true : false} component={Auth} />
              <PrivateRoutes path='/hotel/:id/book' isAuthenticated={this.props.state.user ? true : false} component={BookHotel} />
              <PrivateRoutes path='/orders' isAuthenticated={this.props.state.user ? true : false} component={Orders} />
              <Route path='/hotel/:id' component={FullHotel} />
              <Route path='/' component={Hotels} />
            </Switch>
          }
        </BrowserRouter>
      </div>
    );
  }
}

export default withState(App);
