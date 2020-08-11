import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
    <p> HELLO </p>
    <Button Primary> YES </Button>
    <Button Primary> NO </Button>
    <Progress percent = {65} indicating/>
    </div>
  );
}

export default App;
