import React from "react";
import ClientDTO from "../../models/dtos/client-dto";
import axios from "axios";
import Wrapper from "./Wrapper";
import StatusBar from "./StatusBar";
type Props = {
  client: ClientDTO;
};

// <p dangerouslySetInnerHTML={{ __html: client.accessTokenLifetime }}></p>

const client: React.FC<Props> = ({ client }) => {
  let response = { 'statusCode': 200, 'message': ["Aðgerð tókst"], 'error': null }

  if (client == null)
  {
    client = new ClientDTO();
  }
  
  const save = async (client: ClientDTO) => {
    response = await axios.post(
      '/clients', client
    );
    console.log(response);
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
      <StatusBar status={response}></StatusBar>
      <div className="client">
        <div className="client__help">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed alias neque ullam repudiandae, iste reiciendis suscipit rerum officiis necessitatibus doloribus incidunt libero distinctio consequuntur voluptatibus tenetur aliquid ut inventore!
        </div>
      <div className="client__container__response">
        {response.statusCode}
      </div>
      <div className="client__wrapper">
        <div className="client__container">
          <h1>Stofna nýjann Client</h1>
          <div className="client__container__form">
            <div className="client__container__fields">
            <div className="client__container__field">
                <label className="client__label">clientId</label>
                <input
                  type="text"
                  defaultValue={client.clientId}
                  onChange={e => client.clientId = e.target.value}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Nafn</label>
                <input
                  type="text"
                  defaultValue={client.clientName}
                  onChange={e => client.clientName = e.target.value}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Slóð</label>
                <input
                  type="text"
                  defaultValue={client.clientUri ?? ''}
                  onChange={e => client.clientUri = e.target.value}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Lýsing</label>
                <input
                  type="text"
                  defaultValue={client.description ?? ''}
                  onChange={e => client.clientUri = e.target.value}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Client claims prefix</label>
                <input
                  type="text"
                  defaultValue={client.clientClaimsPrefix ? client.clientClaimsPrefix : 'client__' }
                  onChange={e => client.clientClaimsPrefix = e.target.value}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Protocol Type</label>
                <input
                  type="text"
                  defaultValue={client.protocolType ?  client.protocolType : 'oidc'}
                  onChange={e => client.protocolType = e.target.value }
                  className="client__input"
                />
              </div>
             
              <div className="client__container__field">
                <label className="client__label">Virkur</label>
                <input type="checkbox" className="client__checkbox" defaultChecked={client.enabled} onChange={e => client.enabled = e.target.checked}></input>
              </div>

              <div className="client__container__button">
                <button className="client__button__show">
                  Advanced
                </button>
              </div>

              <div className="client__container__advanced">
              <div className="client__container__field">
                <label className="client__label">Absolute Refresh Token Lifetime</label>
                <input
                  type="number"
                  defaultValue={client.absoluteRefreshTokenLifetime}
                  onChange={e => client.absoluteRefreshTokenLifetime = +e.target.value}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Access Token Lifetime</label>
                <input
                  type="number"
                  defaultValue={client.accessTokenLifetime}
                  onChange={e => client.absoluteRefreshTokenLifetime = +e.target.value}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">allow access token via browser</label>
                <input
                  type="checkbox"
                  defaultChecked={client.allowAccessTokenViaBrowser}
                  onChange={e => client.allowAccessTokenViaBrowser = e.target.checked}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Allow offline access</label>
                <input
                  type="checkbox"
                  defaultChecked={client.allowOfflineAccess}
                  onChange={e => client.allowOfflineAccess = e.target.checked}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Allow plain text Pkce</label>
                <input
                  type="checkbox"
                  defaultChecked={client.allowPlainTextPkce}
                  onChange={e => client.allowPlainTextPkce = e.target.checked}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Allow remember consent</label>
                <input
                  type="checkbox"
                  defaultChecked={client.allowRememberConsent}
                  onChange={e => client.allowRememberConsent = e.target.checked}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Always include user claims in Id token</label>
                <input
                  type="checkbox"
                  defaultChecked={client.alwaysIncludeUserClaimsInIdToken}
                  onChange={e => client.alwaysIncludeUserClaimsInIdToken = e.target.checked}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Always send client claims</label>
                <input
                  type="checkbox"
                  defaultChecked={client.alwaysSendClientClaims}
                  onChange={e => client.alwaysSendClientClaims = e.target.checked}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Authorization code lifetime</label>
                <input
                  type="number"
                  defaultValue={client.authorizationCodeLifetime}
                  onChange={e => client.authorizationCodeLifetime = +e.target.value}
                  className="client__input"
                />
              </div>
              <div className="client__container__field">
                <label className="client__label">Back channel logout session required</label>
                <input
                  type="checkbox"
                  defaultChecked={client.backChannelLogoutSessionRequired}
                  onChange={e => client.backChannelLogoutSessionRequired = e.target.checked}
                  className="client__input"
                />
              </div>
            

              <div className="client__container__field">
                <label className="client__label">Consent lifetime</label>
                <input
                  type="number"
                  defaultValue={client.consentLifetime ?? ''}
                  onChange={e => client.consentLifetime = e.target.value === '' ? null : +e.target.value}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Device code lifetime</label>
                <input
                  type="number"
                  defaultValue={client.deviceCodeLifetime.toString()}
                  onChange={e => client.consentLifetime = +e.target.value}
                  className="client__input"
                />
              </div>
              
              <div className="client__container__field">
                <label className="client__label">Enable local login</label>
                <input
                  type="checkbox"
                  defaultChecked={client.enableLocalLogin}
                  onChange={e => client.enableLocalLogin = e.target.checked}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Front channel logout session required</label>
                <input
                  type="checkbox"
                  defaultChecked={client.frontChannelLogoutSessionRequired}
                  onChange={e => client.frontChannelLogoutSessionRequired = e.target.checked}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Front channel logout uri</label>
                <input
                  type="text"
                  defaultValue={client.frontChannelLogoutUri ?? ''}
                  onChange={e => client.frontChannelLogoutUri = e.target.value}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Identity token lifetime</label>
                <input
                  type="number"
                  defaultValue={client.identityTokenLifetime}
                  onChange={e => client.identityTokenLifetime = +e.target.value}
                  className="client__input"
                />
              </div>
              
              <div className="client__container__field">
                <label className="client__label">Include Jwt Id</label>
                <input
                  type="checkbox"
                  defaultChecked={client.includeJwtId}
                  onChange={e => client.includeJwtId = e.target.checked}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Rair wise subject salt</label>
                <input
                  type="text"
                  defaultValue={client.pairWiseSubjectSalt ?? ''}
                  onChange={e => client.pairWiseSubjectSalt = e.target.value }
                  className="client__input"
                />
              </div>

              

              <div className="client__container__field">
                <label className="client__label">Refresh token expiration</label>
                <input
                  type="number"
                  defaultValue={client.refreshTokenExpiration}
                  onChange={e => client.refreshTokenExpiration = +e.target.value }
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">refreshTokenUsage</label>
                <input
                  type="number"
                  defaultValue={client.refreshTokenUsage}
                  onChange={e => client.refreshTokenUsage = +e.target.value }
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Require client secret</label>
                <input
                  type="checkbox"
                  defaultChecked={client.requireClientSecret}
                  onChange={e => client.requireClientSecret = e.target.checked}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Require consent</label>
                <input
                  type="checkbox"
                  defaultChecked={client.requireConsent}
                  onChange={e => client.requireConsent = e.target.checked}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Require Pkce</label>
                <input
                  type="checkbox"
                  defaultChecked={client.requirePkce}
                  onChange={e => client.requirePkce = e.target.checked}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Sliding refresh token lifetime</label>
                <input
                  type="number"
                  defaultValue={client.slidingRefreshTokenLifetime}
                  onChange={e => client.slidingRefreshTokenLifetime = +e.target.checked}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">Update access token claims on refresh</label>
                <input
                  type="checkbox"
                  defaultChecked={client.updateAccessTokenClaimsOnRefresh}
                  onChange={e => client.updateAccessTokenClaimsOnRefresh = e.target.checked}
                  className="client__input"
                />
              </div>

              
              <div className="client__container__field">
                <label className="client__label">User code type</label>
                <input
                  type="text"
                  defaultValue={client.userCodeType ?? ''}
                  onChange={e => client.userCodeType = e.target.value}
                  className="client__input"
                />
              </div>

              <div className="client__container__field">
                <label className="client__label">userSsoLifetime</label>
                <input
                  type="number"
                  defaultValue={client.userSsoLifetime?.toString()}
                  onChange={e => client.userSsoLifetime = +e.target.value}
                  className="client__input"
                />
              </div>

              </div>
            </div>
            <div className="client__buttons__container">
              <div className="client__button__container">
                <button className="client__button__cancel" onClick={back}>
                  Hætta við
                </button>
              </div>
              <div className="client__button__container">
                <button
                  className="client__button__save"
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
      </div>
    </Wrapper>
  );
};

export default client;
