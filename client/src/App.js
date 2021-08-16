import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { SearchBook } from './pages/SearchBook';
import {Collections} from './pages/Collections'

function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/books"
          render={(props) => (<SearchBook {...props} />)}
        />
        <Route
          exact
          path="/collections"
          render={(props) => (<Collections data-hook="collections-link" {...props} />)}
        />
        {/* <Route
          exact
          path="/collections"
          render={(props) => (<Collections data-hook="collections-link" {...props} />)}
        /> */}
      </Switch>
    </main>
  );
}

export default App;
