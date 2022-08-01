import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Rodape from './Rodape';

export default function Sessions(){
    const { idMovie } = useParams();
    const [schedules, setSchedules] = useState([]);
    const [infos, setInfos] = useState([]);

    useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idMovie}/showtimes`)
    promise.then((answer) => {
        setSchedules(answer.data.days)
        setInfos({title:answer.data.title, poster:answer.data.posterURL})
    })
    promise.catch()
}, [idMovie]);
    return infos!==''?(
        <>
            <TopSession>
                <p>Selecione o horário</p>
            </TopSession>
            <Data>
            {schedules.map(schedule =>
            <>
                    <p>{schedule.weekday} - {schedule.date}</p>
                    <div>
                        {schedule.showtimes.map(session=>
                        <Link to={`/session/${session.id}`}>
                            <span>{session.name}</span>
                        </Link>
                            )}
                    </div>
            </>
            )}
            </Data>
            <Rodape info={infos}/>
        </>

    )
    :
    (
        <></>
    )
}

const Data = styled.div`
margin-bottom: 117px;
a{
    text-decoration: none;
}
p{
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    margin-bottom: 22px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-left: 24px;
    letter-spacing: 0.02em;
    color: #293845;
}
div{
    display: flex;
    align-items: center;
    margin-left: 24px;
}
span{
    margin-right: 8px;
    margin-bottom: 24px;
    width: 82px;
    height: 43px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;

    background: #E8833A;
    border-radius: 3px;
    cursor: pointer;

    color: #FFFFFF;
}
@media (min-width: 600px) {
        max-width: 600px;
        margin: 0 auto;
    }
`
    const TopSession = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 110px;
    margin-top: 67px;
p{
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