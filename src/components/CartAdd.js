import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';
import QuantityContext from '../contexts/QuantityContext';
import UserContext from "../contexts/UserContext";
import { postCart } from '../service';

export default function CartAdd(props) {

    let history = useHistory();
    const stockId = parseInt(props.id);
    const { cont } = useContext(QuantityContext);
    const { user } = useContext(UserContext);
    const userToken = user.token
    const cart = 1;
    const body = { userToken, cont, cart , stockId }

    function verifyLoginAndPostCart(){

        if(user !== ""){
            postCart(body)
            .then((res) => {    
                alert("art added to cart")                           
            }) 
            .catch((error) => {     
                console.log(error)                                
            });             
        } else {
            alert("you need to login first");
            history.push("/sign-in");
        }
    }

    return (
        <>
            <ButtonCart onClick={() => verifyLoginAndPostCart()}> Adicionar ao Carrinho </ButtonCart>
        </>
    )
}

const ButtonCart = styled.button`
    background: #DB6D71;
    border-color: #DB6D71;
    border-radius: 8px;
    width: 200px;
    height: 50px;
    font-size: 18px;
    cursor: pointer;
`;
