import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SearchBook } from './pages/SearchBook';
function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/search-book"
          render={(props) => (<SearchBook data-hook="collections-link" {...props} />)}
        />
        {/* <Route
          exact
          path="/collections"
          render={(props) => (<Collections data-hook="collections-link" {...props} />)}
        />
        <Route
          exact
          path="/collections"
          render={(props) => (<Collections data-hook="collections-link" {...props} />)}
        /> */}
      </Switch>
    </main>
  );
}

export default App;
