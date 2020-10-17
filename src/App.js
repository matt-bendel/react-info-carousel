import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from "./components/react-text-carousel/Carousel";

// rowButtons - [{text: '', icon: ComponentImage}, ...]
// rowContent - [{title: '', text: ''}, ...]

const buttons = [{text: 'Blubrryfsdvsd', icon: null}, {text: 'te', icon: null}];
const rowCon = [{title: 'Big Job', text: 'small job'}, {title: 'Other Job', text: 'banana job'}]
function App() {
  return (
    <div className="App" style={{height: 1000}}>
      <Carousel rowButtons={buttons} rowContent={rowCon} />
    </div>
  );
}

export default App;
