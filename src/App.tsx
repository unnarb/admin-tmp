import React from 'react';
import './styles/App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import ResourcesCard from './components/secure/ResourcesCard';
import Login from './components/public/Login';
import UsersCard from './components/secure/UsersCard';
import Clients from './components/secure/Clients';
import RedirectToMain from './components/secure/RedirectToMain';
import Main from './components/secure/Main';
import ClientCard from './components/secure/ClientCard';



const App = () => {
  return( 
    <div className='App'>
      <BrowserRouter>
        <Route path={'/'} exact component={RedirectToMain} />
        <Route path={'/main'} exact component={Main} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/clients'} exact component={Clients} />
        <Route path={'/clients/create'} exact component={ClientCard} />
        <Route path={'/resources'} exact component={ResourcesCard} />
        <Route path={'/users'} exact component={UsersCard} />
      </BrowserRouter>
    </div>    
  )
}

export default App;
