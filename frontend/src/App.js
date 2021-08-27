import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
