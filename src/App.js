import React from 'react';
import { Route } from 'react-router-dom';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Home from './views/Home';
import Colonie from './views/Colonie';

const App = () => (
  <div>
    <Header />

    <div className="container" id="main">
      <Route exact path="/" component={Home} />
      <Route path="/colonie" component={Colonie} />
    </div>

    <Footer />
  </div>
)

export default App
