import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Header extends Component {
  state = {
    redirect: false,
  };

  logout = () => {
    localStorage.clear();
    this.setState(
      (this.state = {
        redirect: true,
      })
    );
  };

  render() {
    if (this.state.redirect) {
      <Redirect to={"/login"} />;
    }
    return (
      <header className="header__container">
        <div className="header__container__logo">
          <h1>Þjónustusíður</h1>
        </div>
        <div className="header__container__options">
          <div className="header__container__user">
            <div className="header__username">Unnar Snær Bjarnason</div>
            <div className="header__container__logout">
              <button
                className="header__button__logout"
                onClick={() => this.logout()}
              >
                Útskrá
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
