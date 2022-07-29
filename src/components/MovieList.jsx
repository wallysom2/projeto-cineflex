import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Header';

export default function MovieList () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        request.then(response => {
            setMovies(response.data);
        });
	}, []);

    return (
        <MovieListStyled>
             <Header /> 
           <h2>
                Selecione o filme
           </h2>
              <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                            <img src={movie.posterURL} alt={movie.title} />
                    </li>
                ))}
            </ul>

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
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            img {
                width: 129px;
                height: 193px;
                object-fit: cover;
            }
        }
    }
`;

