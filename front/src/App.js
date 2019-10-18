import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Route,Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="row">
      <Header />
      <Route   exact path="/" component={Main}/>
      <Redirect  exact from="/" to="/"/>
    </div>
  );
}

export default App;
