import React from "react";
import ClientDTO from "../../models/dtos/client-dto";
import axios from "axios";
import { createClient } from "../../services/client.service";
import Wrapper from "./Wrapper";
type Props = {
  client: ClientDTO;
};

// <p dangerouslySetInnerHTML={{ __html: client.accessTokenLifetime }}></p>

const ClientCard: React.FC<Props> = ({ client }) => {

  if (client == null)
  {
    client = new ClientDTO();
  }
  
  const save = async (client: ClientDTO) => {
    const response = await axios.post(
      `./clients`, client
    );
    console.log(response);
    alert("Save pushed: " + client.clientName);
    
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
                <label className="clientcard__label">clientId</label>
                <input
                  type="text"
                  defaultValue={client.clientId}
                  onChange={e => client.clientId = e.target.value}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">Nafn</label>
                <input
                  type="text"
                  defaultValue={client.clientName}
                  onChange={e => client.clientName = e.target.value}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">Slóð</label>
                <input
                  type="text"
                  defaultValue={client.clientUri ?? ''}
                  onChange={e => client.clientUri = e.target.value}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">Lýsing</label>
                <input
                  type="text"
                  defaultValue={client.description ?? ''}
                  onChange={e => client.clientUri = e.target.value}
                  className="clientcard__input"
                />
              </div>
             
              <div className="clientcard__container__field">
                <label className="clientcard__label">Virkur</label>
                <input type="checkbox" className="clientcard__checkbox" defaultValue={client.enabled.toString()} onChange={e => client.enabled = e.target.checked}></input>
              </div>

              <div className="clientcard__container__button">
                <button className="clientcard__button__show">
                  Stillingar
                </button>
              </div>

              <div className="clientcard__container__advanced">
              <div className="clientcard__container__field">
                <label className="clientcard__label">Absolute Refresh Token Lifetime</label>
                <input
                  type="number"
                  defaultValue={client.absoluteRefreshTokenLifetime}
                  onChange={e => client.absoluteRefreshTokenLifetime = +e.target.value}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">Access Token Lifetime</label>
                <input
                  type="number"
                  defaultValue={client.accessTokenLifetime}
                  onChange={e => client.absoluteRefreshTokenLifetime = +e.target.value}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">allowAccessTokenViaBrowser</label>
                <input
                  type="checkbox"
                  defaultValue={client.allowAccessTokenViaBrowser.toString()}
                  onChange={e => client.allowAccessTokenViaBrowser = e.target.checked}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">allowOfflineAccess</label>
                <input
                  type="checkbox"
                  defaultValue={client.allowOfflineAccess.toString()}
                  onChange={e => client.allowOfflineAccess = e.target.checked}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">allowPlainTextPkce</label>
                <input
                  type="checkbox"
                  defaultValue={client.allowPlainTextPkce.toString()}
                  onChange={e => client.allowPlainTextPkce = e.target.checked}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">allowRememberConsent</label>
                <input
                  type="checkbox"
                  defaultValue={client.allowRememberConsent.toString()}
                  onChange={e => client.allowRememberConsent = e.target.checked}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">alwaysIncludeUserClaimsInIdToken</label>
                <input
                  type="checkbox"
                  defaultValue={client.alwaysIncludeUserClaimsInIdToken.toString()}
                  onChange={e => client.alwaysIncludeUserClaimsInIdToken = e.target.checked}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">alwaysSendClientClaims</label>
                <input
                  type="checkbox"
                  defaultValue={client.alwaysSendClientClaims.toString()}
                  onChange={e => client.alwaysSendClientClaims = e.target.checked}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">authorizationCodeLifetime</label>
                <input
                  type="number"
                  defaultValue={client.authorizationCodeLifetime}
                  onChange={e => client.authorizationCodeLifetime = +e.target.value}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">backChannelLogoutSessionRequired</label>
                <input
                  type="checkbox"
                  defaultValue={client.backChannelLogoutSessionRequired.toString()}
                  onChange={e => client.backChannelLogoutSessionRequired = e.target.checked}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">backChannelLogoutSessionRequired</label>
                <input
                  type="text"
                  defaultValue={client.clientClaimsPrefix}
                  onChange={e => client.clientClaimsPrefix = e.target.value}
                  className="clientcard__input"
                />
              </div>
              <div className="clientcard__container__field">
                <label className="clientcard__label">consentLifetime</label>
                <input
                  type="number"
                  defaultValue={client.consentLifetime ?? ''}
                  onChange={e => client.consentLifetime = e.target.value === '' ? null : +e.target.value}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">consentLifetime</label>
                <input
                  type="number"
                  defaultValue={client.consentLifetime ?? ''}
                  onChange={e => client.consentLifetime = e.target.value === '' ? null : +e.target.value}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">deviceCodeLifetime</label>
                <input
                  type="number"
                  defaultValue={client.deviceCodeLifetime.toString()}
                  onChange={e => client.consentLifetime = +e.target.value}
                  className="clientcard__input"
                />
              </div>
              
              <div className="clientcard__container__field">
                <label className="clientcard__label">enableLocalLogin</label>
                <input
                  type="checkbox"
                  defaultValue={client.enableLocalLogin.toString()}
                  onChange={e => client.enableLocalLogin = e.target.checked}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">frontChannelLogoutSessionRequired</label>
                <input
                  type="checkbox"
                  defaultValue={client.frontChannelLogoutSessionRequired.toString()}
                  onChange={e => client.frontChannelLogoutSessionRequired = e.target.checked}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">frontChannelLogoutUri</label>
                <input
                  type="text"
                  defaultValue={client.frontChannelLogoutUri ?? ''}
                  onChange={e => client.frontChannelLogoutUri = e.target.value}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">identityTokenLifetime</label>
                <input
                  type="number"
                  defaultValue={client.identityTokenLifetime}
                  onChange={e => client.identityTokenLifetime = +e.target.value}
                  className="clientcard__input"
                />
              </div>
              
              <div className="clientcard__container__field">
                <label className="clientcard__label">includeJwtId</label>
                <input
                  type="checkbox"
                  defaultValue={client.includeJwtId.toString()}
                  onChange={e => client.includeJwtId = e.target.checked}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">pairWiseSubjectSalt</label>
                <input
                  type="text"
                  defaultValue={client.pairWiseSubjectSalt ?? ''}
                  onChange={e => client.pairWiseSubjectSalt = e.target.value }
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">protocolType</label>
                <input
                  type="text"
                  defaultValue={client.protocolType}
                  onChange={e => client.protocolType = e.target.value }
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">refreshTokenExpiration</label>
                <input
                  type="number"
                  defaultValue={client.refreshTokenExpiration}
                  onChange={e => client.refreshTokenExpiration = +e.target.value }
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">refreshTokenUsage</label>
                <input
                  type="number"
                  defaultValue={client.refreshTokenUsage}
                  onChange={e => client.refreshTokenUsage = +e.target.value }
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">requireClientSecret</label>
                <input
                  type="checkbox"
                  defaultValue={client.requireClientSecret.toString()}
                  onChange={e => client.requireClientSecret = e.target.checked}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">requireConsent</label>
                <input
                  type="checkbox"
                  defaultValue={client.requireConsent.toString()}
                  onChange={e => client.requireConsent = e.target.checked}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">requirePkce</label>
                <input
                  type="checkbox"
                  defaultValue={client.requirePkce.toString()}
                  onChange={e => client.requirePkce = e.target.checked}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">slidingRefreshTokenLifetime</label>
                <input
                  type="number"
                  defaultValue={client.slidingRefreshTokenLifetime}
                  onChange={e => client.slidingRefreshTokenLifetime = +e.target.checked}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">updateAccessTokenClaimsOnRefresh</label>
                <input
                  type="checkbox"
                  defaultValue={client.updateAccessTokenClaimsOnRefresh.toString()}
                  onChange={e => client.updateAccessTokenClaimsOnRefresh = e.target.checked}
                  className="clientcard__input"
                />
              </div>

              
              <div className="clientcard__container__field">
                <label className="clientcard__label">updateAccessTokenClaimsOnRefresh</label>
                <input
                  type="text"
                  defaultValue={client.userCodeType ?? ''}
                  onChange={e => client.userCodeType = e.target.value}
                  className="clientcard__input"
                />
              </div>

              <div className="clientcard__container__field">
                <label className="clientcard__label">userSsoLifetime</label>
                <input
                  type="number"
                  defaultValue={client.userSsoLifetime?.toString()}
                  onChange={e => client.userSsoLifetime = +e.target.value}
                  className="clientcard__input"
                />
              </div>

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
