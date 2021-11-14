import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import { getOneArt } from '../service';
import QuantityContext from '../contexts/QuantityContext';

export default function Quantity() {

    const { idArt } = useParams();
    
    const [artFound, setArtFound] = useState("")
    const { cont, setCont } = useContext(QuantityContext);

    useEffect(() => {
        getOneArt(idArt)
        .then((res) => {    
            setArtFound(res.data)                          
        }) 
        .catch((error) => {     
            console.log(error)                                
        });                       
    } , [idArt]);


    function incrementQuantity(){
        if(cont === artFound[0].quantity){
            return alert("exceeds maximum available")
        }
        setCont(cont+1)
    }

    function decrementQuantity(){
        if(cont === 1){
            return alert("you can't choose less than one item")
        }
        setCont(cont-1)
    }

    return (  
        <>  
            {artFound !== "" ? 
                    (artFound.map((art, index) => {
                        return (
                            <Box key={index}>
                                <h1>Quantidade: </h1> 
                                <button onClick={() => incrementQuantity() } className="plus">+</button>
                                <p>{cont}</p>
                                <button onClick={() => decrementQuantity()} className="minus">-</button>
                            </Box>
                        )
                    }))
                :
                ""
            }                         
        </>                    
    )
}

const Box = styled.header`
    background: #E5E5E5;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;  

    button{
        border-radius: 8px;
        border-color: #DB6D71;
        display: flex;
        align-items: center;
        width: 30px;
        height: 30px;
        background: #DB6D71;
        display: flex;
        align-items: center;
        justify-content: center; 
        cursor: pointer;
    }

    p{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center; 
    }

    h1{
        margin-right: 8px;
    }
`;

