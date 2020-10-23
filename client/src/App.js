import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/home';
import PublicPage from './pages/public';
import PrivatePage from './pages/private';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/public" exact component={PublicPage} />
        <Route path="/private" exact component={PrivatePage} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
