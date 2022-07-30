import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

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

    return (
        <SessionsStyled>
            <Header />

            <h2>
                Selecione o horário
            </h2>
          
            <Time>
            {sessoes.map(time =>
            <>
                    <p key={time.id}>{time.weekday} - {time.date}</p>
                    <div>
                        {time.showtimes.map(session=>
                        <Link to={`/session/${session.id}`} key={session.id}>
                            <span>{session.name}</span>
                        </Link>
                            )}
                            
                    </div>
            </>
            )}
            </Time>

            <Footer info={infos}/>
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
const Time = styled.div`
   p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845;
        
   }
    div {
        display: flex;
        flex-direction: row;
        margin: 22px 0px;
    
        
    }
   span {
    width: 83px;
    height: 43px;
    left: 114px;
    top: 227px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-right: 10px;
    text-decoration: none;
   }
   a {
    text-decoration: none;
    }

`
 

        