import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import {Switch} from 'react-router';
import Navbar from './components/layout/Navbar'
import Home from './components/home/Home'
import Favorites from './components/notes/Favorites';
import NoteDetails from './components/notes/NoteDetails';
import EditForm from './components/notes/EditForm';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/favourites" component={Favorites}/> 
          <Route path="/note/:id" component={NoteDetails} />
          <Route path="/editform/:id"component={EditForm}/>
      </Switch>
    </Router>
  );
}

export default App;
