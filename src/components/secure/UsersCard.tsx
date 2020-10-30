import React from 'react';
import Wrapper from './Wrapper';

const UsersCard = () => (
    <Wrapper>
    <div className="users__container">
        <label className="users__search__label">
            Leit eftir subject Id
        </label>
        <input id="search" type="text" className="users__search__input" />
    </div>
    </Wrapper>
)

export default UsersCard