import TopNav from './components/TopNav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useState, useEffect } from 'react';



function App() {
  return (
    <Router>
    <Container maxWidth="sm">

      <TopNav />

    </Container>
    </Router>
  
  );
}

export default App;
