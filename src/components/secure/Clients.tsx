import React, { Component } from 'react';
import axios from 'axios';
import ClientDTO from '../../models/dtos/client-dto';

class Clients extends Component {
    
    state = {
        clients: []
    }
    
    componentDidMount = async () => {
        const response = await axios.get('./clients');
        console.log(response);
        this.setState(this.state = { clients: response.data})
        
        console.log(response.data);
    }

    render() {
        return (
            <div className="clients__container">
                <h2>Vefir og smáforrit</h2>
                <table className="clients__table">
                    <thead>
                    <tr>
                        <th>Auðkenni</th>
                        <th>Identity token lifetime</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.clients.map(
                            (client: ClientDTO) => {
                                return (
                                    <tr>
                                        <td>{client.clientId}</td>
                                        
                                    
                                    <td>{client.identityTokenLifetime}</td>
                                </tr>
                                )
                            }
                        )}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default Clients;