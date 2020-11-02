import React, { Component } from "react";
import axios from "axios";
import ClientDTO from "../../models/dtos/client-dto";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

class Clients extends Component {
  state = {
    clients: [],
    rowCount: 0,
  };

  page = 1;
  lastPage = 0;
  count = 1;

  componentDidMount = async () => {
    const response = await axios.get(
      `./clients?page=${this.page}&count=${this.count}`
    );
    console.log(response);
    this.setState(
      (this.state = {
        clients: response.data.rows,
        rowCount: response.data.count,
      })
    );

    // this.lastPage = response.data.lastpage;
    this.lastPage = this.state.rowCount / this.count;
    console.log("Lastpage: " + this.lastPage);

    console.log(response.data);
  };

  next = async () => {
    if (this.page === this.lastPage) {
      return;
    }

    this.page++;
    await this.componentDidMount();
  };

  previous = async () => {
    if (this.page === 1) {
      return;
    }

    this.page--;

    await this.componentDidMount();
  };

  delete = async (clientId: string) => {
    if (window.confirm("Ertu viss um að þú viljir eyða þessari færslu?")) {
      const response = await axios.delete(`./clients/${clientId}`);
      console.log(response);
      await this.componentDidMount();
    }
  };

  edit = async (client: ClientDTO) => {
    console.log(client);
  };

  changeCount(count: string) {
    this.count = +count;
    this.componentDidMount();
  }

  render() {
    return (
      <Wrapper>
        <div className="clients__container">
          <h2>Vefir og smáforrit</h2>
          <div className="clients__container__options">
              <div className="clients__container__button">
                  <Link to={'/app/create'} className="clients__button__new">Bæta við nýjum</Link>
              </div>
            <div className="clients__container__field">

              <label htmlFor="count" className="clients__label">
                Fjöldi á síðu
              </label>
              <select
                id="count"
                onChange={(e) => this.changeCount(e.target.value)}
                className="clients__select"
              >
                <option value="1">1</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">50</option>
              </select>
            </div>
          </div>
          <div className="client__container__table">
            <table className="clients__table">
              <thead>
                <tr>
                  <th>Auðkenni</th>
                  <th>Identity token lifetime</th>
                </tr>
              </thead>
              <tbody>
                {this.state.clients.map((client: ClientDTO) => {
                  return (
                    <tr key={client.clientId}>
                      <td>{client.clientId}</td>
                      <td>{client.identityTokenLifetime}</td>
                      <td>
                        <button
                          className="clients__button__edit"
                          onClick={() => this.edit(client)}
                        >
                          Breyta
                        </button>
                      </td>
                      <td>
                        <button
                          className="clients__button__delete"
                          onClick={() => this.delete(client.clientId)}
                        >
                          Eyða
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <nav className="clients__pagination">
          <li className="clients__page-item">
            <a
              href="#"
              onClick={this.previous}
              className="clients__pagination-previous"
            >
              Til baka
            </a>
          </li>
          <li className="clients__page-item">
            <a
              href="#"
              onClick={this.next}
              className="clients__pagination-next"
            >
              Næsta
            </a>
          </li>
        </nav>
      </Wrapper>
    );
  }
}

export default Clients;
