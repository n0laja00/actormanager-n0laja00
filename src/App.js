import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import Header from './pagecomponents/Header';
import Worlds from './pages/Worlds';
import Continents from './pages/Continents';
import Nations from './pages/Nations';
import Cities from './pages/Cities';
import Organisations from './pages/Organisations';
import Actors from './pages/Actors';
import Information from './pages/Information';
import InformationText from './pagecomponents/InformationText';
import Creations from './pagecomponents/YourCreations';
import CreateCharacterVM from './pages/CreateCharacterVM';
import CreateAsset from './pages/CreateAsset';

function App() {
  const [state, setstate] = useState(1)
  useEffect(() => {
    
  }, []);
  return (
    <Router>
      <div className="container">
        <Header/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/games">
              <Games />
            </Route>
            <Route exact path="/worlds">
              <Worlds />
            </Route>
            <Route exact path="/continents">
              <Continents />
            </Route>
            <Route exact path="/nations">
              <Nations />
            </Route>
            <Route exact path="/cities">
              <Cities />
            </Route>
            <Route exact path="/organisations">
              <Organisations />
            </Route>

            <Route exact path="/ccvm">
              <CreateCharacterVM />
            </Route>

            <Route exact path="/createAsset">
              <CreateAsset />
            </Route>
            
            <Route exact path="/actors">
              <Actors />
            </Route>

            <Route exact path="/yourCreations">
              <Creations/>
            </Route>

            <Route exact path="/information/:type/:id">
              <Information />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
