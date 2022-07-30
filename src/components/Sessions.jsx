import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Header from "./Header";

export default function Sessions() {
    const params = useParams();
    const [sessoes, setSessoes] = useState([]);
    const [infos, setInfos] = useState([]);


    useEffect(() => {
        const requisicao = axios.get(
          `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes/`
        );
  
        requisicao.then((res) => {
            setSessoes(res.data.days);
            setInfos({title:res.data.title, poster:res.data.posterURL})
          });
        }, []);
console.log(sessoes);

    return (
        <SessionsStyled>
            <Header />
            <h2>
                Selecione o horário
            </h2>
            <div>
            {sessoes.map(time =>
            <>
                    <p>{time.weekday} - {time.date}</p>
                    <div>
                        {time.showtimes.map(session=>
                        <Link to={`/session/${session.id}`}>
                            <span>{session.name}</span>
                        </Link>
                            )}
                    </div>
            </>
            )}
            </div>
        </SessionsStyled>
    );
}

const SessionsStyled = styled.div`
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
        height: 110px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #293845;
    }
`

        