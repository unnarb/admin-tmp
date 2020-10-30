import React from "react";
import ClientDTO from "../../models/dtos/client-dto";
import { createClient } from "../../services/client.service";
import Wrapper from "./Wrapper";
type Props = {
  client: ClientDTO;
};

// <p dangerouslySetInnerHTML={{ __html: client.accessTokenLifetime }}></p>

const ClientCard: React.FC<Props> = ({ client }) => {
  const save = (client: ClientDTO) => {
    alert("Save pushed: " + client.clientName);
    createClient(new ClientDTO());
  };

  const back = () => {
    // TODO: Go back
  };

  const isValid = (): boolean => {
    return true;
  };

  const handleChange = (event: unknown) => {};

  return (
    <Wrapper>
      <div className="clientcard__wrapper">
        <div className="clientcard__container">
          <h1>Stofna nýjann Client</h1>
          <div className="clientcard__container__form">
            <div className="clientcard__container__fields">
              <div className="clientcard__container__field">
                <label className="clientcard__label">Nafn</label>
                <input
                  type="text"
                  value={client.clientName}
                  onChange={handleChange}
                  className="clientcard__input"
                />
              </div>
            </div>
            <div>{client.absoluteRefreshTokenLifetime}</div>
            <div className="clientcard__buttons__container">
              <div className="clientcard__button__container">
                <button className="clientcard__button__cancel" onClick={back}>
                  Hætta við
                </button>
              </div>
              <div className="clientcard__button__container">
                <button
                  className="clientcard__button__save"
                  disabled={!isValid()}
                  onClick={() => save(client)}
                >
                  Vista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClientCard;
