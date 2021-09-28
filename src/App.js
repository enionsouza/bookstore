import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './redux/configureStore';
import Books from './pages/books';
import Categories from './pages/categories';
import './App.css';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
