import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main className='main__section'>
        <Home/>
      </main>
    </React.Fragment>
  );
}

export default App;
