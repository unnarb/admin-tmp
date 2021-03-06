import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';

class Wrapper extends Component {
    state = {
        redirect: false
    }
    componentDidMount = () => {
       // Get user 
       if ( !localStorage.getItem('token')){
           this.setState(this.state = { 
               redirect: true 
            })
       }
    }

    render() {
        if ( this.state.redirect )
        {
            return <Redirect to={'/login'} />
        }

        return (
            <div className='wrapper__container'>
                <Header />
                <Nav />
                <main className="wrapper__main">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Wrapper;