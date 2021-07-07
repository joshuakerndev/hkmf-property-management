import './App.css';
import MainPage from './Components/MainPage/MainPage';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/ContactPage/ContactPage';
import Navbar from './Components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location={location}>
              <Route 
                exact 
                path="/" 
                render={
                routeProps => (
                  <div className={"page"}>
                    <MainPage {...routeProps} />
                  </div>
                  )
                } />
              <Route exact path="/services" render={
                routeProps => (
                  <div className="page">
                    <ServicesPage {...routeProps} />
                  </div>
                  )
                } />
              <Route exact path="/about" render={
                routeProps => (
                  <div className="page">
                    <AboutPage {...routeProps} />
                  </div>
                  )
                } />
              <Route exact path="/contact" render={
                routeProps => (
                  <div className="page">
                    <ContactPage {...routeProps} />
                  </div>
                  )
                } />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}>
      </Route>   
    </div>
  );
}

export default App;