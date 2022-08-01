import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Movies() {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then((answer) => {
            setMovies(answer.data)
        })
        promise.catch()
    }, []);

    return (
        <>
            <TopMovie>
                <p>Selecione o filme</p>
            </TopMovie>
            <Posters>
                {Movies.map(movie =>
                <Link to={`/movie/${movie.id}`}>
                    <Poster >
                        <img src={movie.posterURL} alt={movie.title} />
                    </Poster>
                </Link>
                )}
            </Posters>
        </>

    )
}
const Posters = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    @media (min-width: 600px) {
        max-width: 700px;
        margin: 0 auto;
    }
`

const Poster = styled.div`
    display: flex;
    margin-bottom: 11px;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    & img{
    width: 129px;
    height: 193px;
}
`

const TopMovie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 110px;
    margin-top: 67px;
    & p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;
}
`