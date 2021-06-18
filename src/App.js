import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/ContactPage/ContactPage';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;