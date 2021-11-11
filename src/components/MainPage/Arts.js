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
            console.log(res.data)                              
        }) 
        .catch((error) => {     
            console.log(error)                                
        });                       
    } , []);

    return (
        <>
            <TitleStyled>Clique na obra para saber mais</TitleStyled>
            <AllArtists>
                {artsFound !== "" ?
                    (artsFound.map((art) => {
                        return (                            
                            <Link to={`/art`} style={{ textDecoration: 'none' }}>
                                <OneArt> <img src = {art.art_photo} alt = "imagem de uma obra de arte" /> </OneArt>
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
    margin-bottom: 5px;
    margin-left: 40px;
    font-size: 25px;
`;

const AllArtists = styled.div`
    height: 160px;
    background: #E5E5E5;
    margin-bottom:50px;
    margin-left: 40px;

    display: flex;
    align-items: center;
    overflow-x: scroll;
   
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
    font-size: 20px;
    width: 140px;
    height: 130px;
    margin-left: 40px;
    border-radius: 10px;
    color: #DB6D71;
    text-align: center;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 110px;
        height: 110px;
        border-radius: 5px;
    }
`;

