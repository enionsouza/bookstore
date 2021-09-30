import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import NavBar from './components/NavBar';
import Books from './pages/books';
import Categories from './pages/categories';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <NavBar />
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
