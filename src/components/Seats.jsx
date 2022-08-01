import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {cpfMask} from "./Mask"
import Footer from './Footer';

export default function Seats(){
    const { idSession } = useParams();
    const [seats, setSeats] = useState([]);
    const [name, setName] = useState('');
    const [CPF, setCPF] = useState('')
    const [ids, setIds] = useState([])
    const [data, setData] = useState([]);
    const [numberChairs, setNumberChairs] = useState([]);
    const [infos, setInfos] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSession}/seats`)
    promise.then((answer) => {
        setSeats(answer.data.seats);
        setData(answer.data);
        setInfos({title: answer.data.movie.title, poster: answer.data.movie.posterURL, schedule: answer.data.name, dayWeek: answer.data.day.weekday})
    })
    promise.catch()
}, [idSession]);

    function choseSeat(selected, id, numberChair){
        seats[id*1-1].selected = selected;

        if(ids.length>0 && ids.join(' ').includes(id))setIds(ids.filter(ids=>{return ids!==id}));
        else{
            setIds([...ids, id]);
        }
        if(numberChairs.length>0 && numberChairs.join(' ').includes(numberChair))setNumberChairs(numberChairs.filter(numberChairs=>{return numberChairs!==numberChair}));
        else{
            setNumberChairs([...numberChairs, numberChair]);
        }
    }
    function login (event) {
        event.preventDefault();
        if(name!==''&& CPF.length===14 && ids.length!==0){
		const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
            ids: numberChairs,
            name: name,
            cpf: CPF
        });
        request.then(()=>{
            navigate("/Success", {
            state: {name: name, cpf: CPF, ids:ids, data: data},
        })
    })
	}
}

    return(
        <>
            <TopFinish>
                <p>Selecione o(s) assento(s)</p>
            </TopFinish>
            <SeatsStyled >
                {seats.map(assento =>
                <>
                    {!assento.isAvailable?
                        <p className="unavailable" >{assento.name}</p>
                        : assento.selected?
                        <p className="selected" onClick={()=>choseSeat(!assento.selected, assento.name, assento.id)}>{assento.name}</p>
                        :
                        <p className="available" onClick={()=>choseSeat(!assento.selected, assento.name, assento.id)}>{assento.name}</p>

                    }
                </>
                )}
            </SeatsStyled>
            <Seats>
                <div>
                    <p className='selected'> </p>
                    <p className='available'> </p>
                    <p className='unavailable'> </p>
                    <div>
                        <em>Selecionado</em>
                        <em>Disponível</em>
                        <em>Indisponível</em>
                    </div>
                </div>
            </Seats>
            <Entries>
                <form onSubmit={login}>
                    <p>Nome do comprador:</p>
                    <input 
                    type="text" 
                    placeholder='Digite seu nome...'
                    onChange={e => setName(e.target.value)}
                    value={name}
                    required
                    ></input>

                    <p>CPF do comprador:</p>
                    <input 
                        type="text" 
                        placeholder='Digite seu CPF...'
                        onChange={e => setCPF(cpfMask(e.target.value))}
                        value={CPF}
                        required
                    ></input>
                    <button type="submit">Reservar assento(s)</button>
                </form>
            </Entries>
            <Footer info={infos}></Footer>
        </>
    )
}

const Entries = styled.div`
margin-top: 72px;
margin-bottom: 167px;
display: flex;
justify-content: center;
p{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    color: #293845;
}
input{
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
    padding-left: 15px;
    margin-bottom: 10px;
}
input::placeholder{
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #AFAFAF;
}
button{
    margin: 45px auto; 
    display: flex;
    justify-content: center;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    border: none;
    cursor: pointer;
    color: #FFFFFF;

}
`

const SeatsStyled = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
max-width: 330px;
p {
    margin-right: 7px;
    margin-bottom: 18px;
    width: 26px;
    height: 26px;

    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #000000;
}
.available{
    background: #C3CFD9;
    cursor: pointer;
}
.unavailable{
    background: #FBE192;
    cursor: not-allowed;
}
.selected{
    background: #8DD7CF;
    cursor: pointer;
}
div{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
div div{
    margin-right: 10px;
    margin-top: -10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
em{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;

    color: #4E5A65;
}
`

const TopFinish = styled.div`
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