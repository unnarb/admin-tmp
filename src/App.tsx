import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import ResourcesCard from './components/secure/ResourcesCard';
import DefaultCard from './components/secure/DefaultCard';
import Login from './components/public/Login';
import UsersCard from './components/secure/UsersCard';
import Clients from './components/secure/Clients';



const App = () => {
  return( 
    <div className='App'>
      <BrowserRouter>
        <Route path={'/'} exact component={DefaultCard} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/clients'} exact component={Clients} />
        <Route path={'/resources'} exact component={ResourcesCard} />
        <Route path={'/users'} exact component={UsersCard} />
      </BrowserRouter>
    </div>    
  )
}

export default App;
