import './App.css';
import '../src/components/header-component/header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../src/components/header-component/header';
import Home from './pages/home-page/home';

function App() {
  return (
    <BrowserRouter basename='/portfolio'>
    <Header />
    <Switch>
    <Route exact path='/'>
      <Home></Home>
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
