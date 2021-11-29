import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import QuantityContext from "../contexts/QuantityContext";
import UserContext from "../contexts/UserContext";
import { postCart } from "../service";

export default function CartAdd(props) {
  let history = useHistory();
  const stockId = parseInt(props.id);
  const { cont } = useContext(QuantityContext);
  const { user } = useContext(UserContext);

  function verifyLoginAndPostCart() {
    if (user) {
      const userToken = user.token;
      const cart = 1;
      const body = { userToken, cont, cart, stockId };
      postCart(body)
        .then((res) => {
          alert("Arte adicionada ao carrinho");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Por favor, realizar Loggin");
      history.push("/sign-in");
    }
  }

  return (
    <>
      <ButtonCart
        onClick={() => verifyLoginAndPostCart()}
        disabled={props.disabled}
      >
        {" "}
        Adicionar ao Carrinho{" "}
      </ButtonCart>
    </>
  );
}

const ButtonCart = styled.button`
  background: #db6d71;
  border-color: #db6d71;
  border-radius: 8px;
  width: 200px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
`;
