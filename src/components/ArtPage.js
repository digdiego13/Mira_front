import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import { getOneArt } from '../service';
import Quantity from './Quantity';
import QuantityContext from '../contexts/QuantityContext';

export default function ArtPage() {
    const { cont } = useContext(QuantityContext);
    const { idArt } = useParams();
    const [artFound, setArtFound] = useState("")

    useEffect(() => {
        getOneArt(idArt)
        .then((res) => {    
            setArtFound(res.data) 
            console.log(res.data)                              
        }) 
        .catch((error) => {     
            console.log(error)                                
        });                       
    } , []);

    return (  
        <>  
            {artFound !== "" ? 
                    (artFound.map((art) => {
                        return (
                            <>
                                <TitleBox>
                                    <h1> Galeria: {art.galery_name}</h1> 
                                    <div></div>
                                    <h2> {art.art_name}</h2>
                                    </TitleBox>   
                                <BodyBox>
                                <ArtBox><img src={art.art_photo} alt="imagem de uma arte"/></ArtBox>
                                <DescriptionBox>
                                    <p>Por: R$ {art.price},00</p>
                                    <div></div>
                                    <p>{art.size} cm</p>    
                                    <div></div>  
                                    <p>Peças disponíveis: {art.quantity}</p> 
                                    <div></div>                              
                                    <Quantity/>
                                    <div></div>
                                    <CartAdd>Adicionar ao carrinho</CartAdd>
                                </DescriptionBox>
                                </BodyBox>        
                                <ArtistBox>
                                    <h1>{art.artist_name}</h1>
                                    <div></div>
                                    <h2>{art.description}</h2>
                                </ArtistBox>
                            </>
                        )
                    }))
                :
                ""
            }                         
        </>                    
    )
}

const TitleBox = styled.div`
    background: #E5E5E5;
    margin-top: 70px;
    width: 1200px;
    height: 100px;
    margin: 100px auto 0 auto;
    color: #000000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
        height: 1px;
        width: 80%;
        background: #DB6D71;
    }

    h1{
        font-size: 20px;
    }
    h2{
        font-size: 30px;
        font-weight: bold;
    }
    
`;

const ArtBox = styled.div`
    background: #E5E5E5;
    margin-top: 70px;
    width: 315px;
    height: 265px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 300px;
        height: 250px;
    }
`;

const DescriptionBox = styled.div`
    background: #E5E5E5;
    margin-top: 70px;
    width: 300px;
    height: 400px;
    margin-bottom: 20px;
    color: #000000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
        height: 1px;
        width: 80%;
        background: #DB6D71;
    }

`;
const CartAdd = styled.button`
    background: #DB6D71;
    border-color: #DB6D71;
    border-radius: 8px;
    width: 200px;
    height: 50px;
    font-size: 18px;
    cursor: pointer;
`;


const BodyBox = styled.div`
    display: flex;
    width: 1200px;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;

`;

const ArtistBox = styled.div`
    background: #E5E5E5;
    margin-top: 70px;
    width: 1200px;
    height: 100px;
    margin: 0 auto;    
    color:#000000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;   
    
    div{
        height: 1px;
        width: 40%;
        background: #DB6D71;
    }

    h1{
        font-size: 20px;
        margin: 10px;
    }
    h2{
        font-size: 18px;
        margin: 10px;
    }
`;

