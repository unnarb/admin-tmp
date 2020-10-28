import React from 'react';
import './App.css';
import ClientCard from './components/ClientCard'



const App = () => {

  const dummy = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const dummy2 = () => {

  }

  return( 
    <div className='App'>
      <h1>Þjónustusíður</h1>
      <div className="clientcard__wrapper">
        <ClientCard />
      </div>
    </div>
  )
}

export default App;
