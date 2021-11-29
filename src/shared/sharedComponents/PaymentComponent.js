import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import {
  CheckoutStyle,
  ModalQueryStyle,
  modalStyle,
} from "../sharedStyles/sharedStyles";
import { checkStock } from "../../service";
import { useHistory } from "react-router-dom";
import boleto from "../boleto.png";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import ButtonBuyComponent from "./ButtonBuyComponent";

export default function PaymentComponent({ totalValue }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useContext(UserContext);
  const [onStock, setOnStock] = useState(true);
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);

  function checkStockFunction() {
    checkStock(user.token)
      .then((res) => {
        setOnStock(true);
      })
      .catch((err) => {
        if (err.response.status === 405) {
          setOnStock(false);
        } else if (err.response.status === 401) {
          alert("please, logg-in");
          history.push("/sign-in");
        }
      });
  }

  useEffect(() => {
    if (modalIsOpen) {
      checkStockFunction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen]);

  return (
    <>
      <CheckoutStyle onClick={() => setModalIsOpen(true)}>
        Pagamento{" "}
      </CheckoutStyle>
      <ModalQueryStyle
        isOpen={modalIsOpen}
        style={modalStyle}
        ariaHideApp={false}
      >
        {onStock ? (
          <>
            <h1>Pagamento</h1>
            <MessageStyle>
              <h2>Informações pessoais:</h2>
              <p>{`Nome completo: ${user.name}`}</p>
              <p>{`Endereço: ${user.adress}`}</p>
            </MessageStyle>
            <MessageStyle>
              <h2>Forma de pagamento:</h2>
              <p>Nós apenas aceitamos boleto como forma de pagamento.</p>
              <p>Por favor, baixe o boleto e finalize o pagamento !</p>
              <TotalAndBackStyle>
                <p>{`Total: ${totalValue}`}</p>
                <a href={boleto} download="ticket">
                  <TicketStyle onClick={() => setDisabled(false)}>
                    <BsFillArrowDownCircleFill></BsFillArrowDownCircleFill>
                    <p>Boleto!</p>
                  </TicketStyle>
                </a>
              </TotalAndBackStyle>
              <ButtonBuyComponent disabled={disabled}></ButtonBuyComponent>
            </MessageStyle>
            <TotalAndBackStyle>
              <BackToCartStyle onClick={() => setModalIsOpen(false)}>
                Voltar ao carrinho
              </BackToCartStyle>
            </TotalAndBackStyle>
          </>
        ) : (
          <>
            <h1>Infelizmente, Não temos todas essas artes no stock !</h1>
            <TotalAndBackStyle>
              <BackToCartStyle onClick={() => setModalIsOpen(false)}>
                Voltar ao carrinho
              </BackToCartStyle>
            </TotalAndBackStyle>
          </>
        )}
      </ModalQueryStyle>
    </>
  );
}

const MessageStyle = styled.div`
  font-size: 18px;
  text-align: left;
  width: 100%;
  color: #e5e5e5;
  border-top: solid 3px;
  margin-top: 15px;
  padding-top: 15px;

  h2 {
    margin-bottom: 10px;
    color: #db6d71;
  }
  p {
    margin-bottom: 5px;
  }
`;

const TotalAndBackStyle = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  justify-content: space-around;

  p {
    font-size: 18px;
    color: #e5e5e5;
  }
  a {
    text-decoration: none;
  }
`;

const BackToCartStyle = styled.button`
  background-color: white;
  border-radius: 40px;
  padding: 5px 15px;
  font-size: 15px;
  text-decoration: none;
  border: none;
  font-weight: 700;
  color: #db6d71;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

const TicketStyle = styled.button`
  border-radius: 15px;
  background-color: #e5e5e5;
  height: 30px;
  padding: 10px 30px;
  font-size: 18px;
  text-decoration: none;
  border: none;
  font-weight: 700;
  margin-bottom: 40px;
  display: flex;
  align-items: center;

  p {
    color: black;
    text-decoration: none;
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;
