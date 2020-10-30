import React from 'react';
import './styles/App.scss';
import ClientCard from './components/ClientCard'
import Nav from './components/Nav';
import ClientDTO from './models/dtos/client-dto'



const App = () => {

  const dummy = (e: React.MouseEvent<HTMLButtonElement>) => {
      return null;  
  }

  const dummy2 = () => {
      return null;
  }

  return( 
    <div className='App'>
      <h1>Þjónustusíður</h1>
      <Nav />
      <div className="clientcard__wrapper">
        <ClientCard client={new ClientDTO()} />
        
      </div>
    </div>
  )
}

export default App;
