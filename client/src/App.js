import React from 'react';
import './App.css';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <ProjectList />
          </Route>
          <Route path="/project/:id">
            <ProjectDetails />
          </Route>
        </Switch>
        
      </header>
    </div>
  );
}

export default App;
