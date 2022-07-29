import React from 'react';
import styled from 'styled-components';

import Header from './Header';

export default function MovieList () {
    return (
        <MovieListStyled>
             <Header /> 
           <h2>
                Selecione o filme
           </h2>
           

        </MovieListStyled>
    );
}


const MovieListStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;
    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        height: 67px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #293845;
    }
`;

