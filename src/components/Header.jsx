import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            <h1>
                CINEFLEX
            </h1>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    width: 100%;
    height: 67px;
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #E8833A;
    }
`;