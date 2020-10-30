import React, { Component, SyntheticEvent } from 'react';

class Login extends Component {
    username: string = "";
    password: string = "";

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        console.log({
            user: this.username,
            password: this.password
        })
    }

    render() {
        return (
            <div className="login__container">
                <h1>Innskráning</h1>
                <form className="login__form" onSubmit={this.submit}>
                    <div className="login__container__field">
                        <label className="login__label" htmlFor="user">
                            Notandanafn
                        </label>
                        <input type="text" id="user" className="login__input" required placeholder="Notandanafn" autoFocus onChange={e => this.username = e.target.value} />
                    </div>
                    <div className="login__container__field">
                        <label className="login__label" htmlFor="password">
                            Lykilorð
                        </label>
                        <input type="password" id="password" className="login__input" required placeholder="Lykilorð" onChange={e => this.password = e.target.value } />
                    </div>
                    <div className="login__container__button">
                        <button className="login__button">Innskrá</button>
                    </div>
                </form>                
            </div>
        )
    }
}

export default Login;