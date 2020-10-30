import React from 'react';
import './styles/App.scss';
import ClientCard from './components/secure/ClientCard'
import { BrowserRouter, Route } from 'react-router-dom';
import ResourcesCard from './components/secure/ResourcesCard';
import DefaultCard from './components/secure/DefaultCard';
import Login from './components/public/Login';



const App = () => {
  return( 
    <div className='App'>
      <BrowserRouter>
        <Route path={'/'} exact component={DefaultCard} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/clients'} exact component={ClientCard} />
        <Route path={'/resources'} exact component={ResourcesCard} />
      </BrowserRouter>
    </div>    
  )
}

export default App;
