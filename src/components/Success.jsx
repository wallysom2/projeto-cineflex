import styled from 'styled-components';
import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Success(){
    const { state } = useLocation();
    const {name, cpf, ids, data} = state;

    return(
        <Confirmation>
            <h2>Pedido feito <br/>com sucesso!</h2>
            <div>
                <p className='title'>Filme e sessão:</p>
                <p className='info'>{data.movie.title}</p>
                <p className='info'>{data.day.date + " " + data.name}</p>
                <p className='title'>Ingressos:</p>
                {ids.sort((a, b)=>{return a-b}).map(id=>{
                    return (<p className='info'>Assento {id}</p>)
                })}
                <p className='title'>Comprador:</p>
                <p className='info'>Nome: {name}</p>
                <p className='info'>CPF: {cpf}</p>
            </div>
            <Link to="/">
                <p>Voltar pra Home</p>
            </Link>
        </Confirmation>
    )
}

const Confirmation = styled.div`
margin-top: 67px;

h2{
    padding: 20px;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    margin-top: 100px;
    margin-bottom: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
}
div{
    margin-left: 38px;
    @media (min-width: 600px) {
        max-width: 700px;
        margin: 0 auto;
    }

}
.title{
    margin-top: 20px;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;
}
.info{
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    
}
a{
    margin-top: 62px;
    text-decoration: none;
    display: flex;
    justify-content: center;
}
a p{
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    cursor: pointer;

    color: #FFFFFF;

}
`