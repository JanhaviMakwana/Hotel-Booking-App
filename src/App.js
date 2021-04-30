import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import DashBoard from './components/DashBoard/DashBoard';
import Hotels from './components/Hotels/Hotels';
import FullHotel from './components/Hotels/FullHotel/FullHotel';
import ContactData from './components/CotactData/ContactData';
import BookHotel from './components/BookHotel/BookHotel';
import Orders from './components/Orders/Orders';
import Auth from './components/Auth/Auth';
import * as actions from './store/actions/Auth';
import { AuthProvider } from './hotel-context';
/* import thunk from 'redux-thunk'; */
import { CssBaseline } from '@material-ui/core';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <CssBaseline>
          <BrowserRouter>
            <AuthProvider>
              <DashBoard />
              <Switch>
                <Route path='/auth' exact component={Auth} />
                <Route path='/user/hotel/:id' exact component={FullHotel} />
                <Route path='/hotel/:id' exact component={FullHotel} />
                {/* <Route path='/user/hotel/:id/book' exact component={ContactData} /> */}
                <Route path='/user/hotel/:id/book' exact component={BookHotel} />
                <Route path='/user/orders' component={Orders} />
                <Route path='/user' exact component={Hotels} />
                <Route path='/' component={Hotels} />

              </Switch>
            </AuthProvider>
          </BrowserRouter>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
