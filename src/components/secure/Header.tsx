import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Header extends Component {
    state = { 
        redirect: false 
    }

    logout = () => {
        localStorage.clear();
        this.setState(this.state = { 
            redirect: true
        });
    }
    
    render() {
        if ( this.state.redirect )
        {
            <Redirect to={'/login'} />
        }
        return (
            <div className="header__container">
                <h1>Þjónustusíður</h1>
                <div className="header__container__user">
                    <div className="header__user">
                    Unnar Snær Bjarnason
                    <div className="header__container-logout">
                        <button className="header__button__logout" onClick={() => this.logout()}>Útskrá</button>
                    </div>
                    </div>
                </div>
            </div>)
    }
}


export default Header;