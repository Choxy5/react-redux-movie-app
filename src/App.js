import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:imgbID" component={MovieDetails} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
