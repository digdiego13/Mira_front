import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getArts } from '../../service';

export default function Arts() {

    const [artsFound, setArtsFound] = useState("")

    useEffect(() => {
        getArts()
        .then((res) => {    
            setArtsFound(res.data)                             
        }) 
        .catch((error) => {     
            console.log(error)                                
        });                       
    } , []);

    return (
        <>
            <TitleStyled>Para comprar ou saber mais, escolha uma arte:</TitleStyled>
            <AllArtists>
                {artsFound !== "" ?
                    (artsFound.map((art) => {
                        return (                            
                            <Link to={`/art/${art.id}`} style={{ textDecoration: 'none' }}>
                                <OneArt> 
                                    <img src = {art.art_photo} alt = "imagem de uma obra de arte" />
                                    <p> {art.art_name} </p>
                                    <div> R$ {art.price},00 </div>
                                    <button> mais detalhes </button>
                                </OneArt>
                            </Link>                            
                        )
                    }))
                    :
                    ""
                }
            </AllArtists>
        </>
    )
}
const TitleStyled = styled.div`
    background: #000000;
    color: #E5E5E5;
    margin: 50px 0 0 40px;
    font-size: 25px;
`;


const AllArtists = styled.div`
    height: 300px;
    background: #E5E5E5;
    margin: 10px 0 50px 40px;
    border-radius: 8px;    
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    cursor: auto;
    overflow-y: scroll;
   
    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }

    &::-webkit-scrollbar-track {
    background: #DB6D71;
    border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #E5E5E5;
    border-radius: 10px;
    } 
`;

const OneArt = styled.div`
    background-color: #000000;
    font-size: 15px;
    width: 200px;
    height: 200px;
    margin: 20px 40px;
    border-radius: 10px;
    color: #DB6D71;
    text-align: center;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: auto;
    img{
        width: 120px;
        height: 120px;
        border-radius: 5px;
    }
    div{
        color: #E5E5E5;
        width: 100px;
        height: 10px;
        background-color: #000000;
        margin-top: 5px;
        font-size: 12px;
        margin-bottom: 5px;
    }
    button{
        width: 100px;
        height: 20px;
        border-radius: 10px;
        color: #E5E5E5;
        border-color: #DB6D71;
        background-color: #000000;
        margin-top: 5px;
        font-size: 12px;
        cursor: pointer;
    }
    p{
        height: 15px;
        margin-top: 5px;
    }
`;

