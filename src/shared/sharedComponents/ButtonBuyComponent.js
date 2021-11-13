import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import BackButtonComponent from "./BackButtonComponent";
import { getCheckoutList } from "../../service";
import UserContext from "../../contexts/UserContext";
import {
  CheckoutStyle,
  ModalQueryStyle,
  modalStyle,
} from "../sharedStyles/sharedStyles";

export default function ButtonBuyComponent({disabled}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checkoutList, setCheckoutList] = useState([1]);
  const { user } = useContext(UserContext);
  const [outOfStock, setOutOfStock] = useState(false);

  function loadCheckoutList() {
    getCheckoutList(user.token)
      .then((res) => {
        setCheckoutList(res.data);
      })
      .catch((err) => {
        if (err.response.status === 405) {
          setCheckoutList([]);
          setOutOfStock(true);
        }
      });
  }

  useEffect(() => {
    if (modalIsOpen) {
      loadCheckoutList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsOpen]);

  function calculateTotal() {
    let total = 0;
    checkoutList.forEach((item) => {
      let artValue = item.price * item.carrier_quantity;
      total += artValue;
    });

    return total;
  }

  return (
    <>
      <CheckoutStyle onClick={() => setModalIsOpen(true)} disabled={disabled}>Buy! </CheckoutStyle>
      <ModalQueryStyle
        isOpen={modalIsOpen}
        style={modalStyle}
        ariaHideApp={false}
      >
        {outOfStock ? (
          <h1>Unfotunatelly, we dont have all these arts on stock</h1>
        ) : (
          <h1>Congrats, you just bought wonderful arts!</h1>
        )}
        <TableStyle>
          {checkoutList.map((checkoutItem) => {
            return (
              <ConfirmationTableStyle>
                <ImageStyle
                  src={String(checkoutItem.art_photo)}
                  alt={"Art photo"}
                ></ImageStyle>
                <div>
                  <ArtNameStyle>{checkoutItem.art_name}</ArtNameStyle>
                </div>
                <ValueStyle>
                  <QuantityStyle>{`Qtd :  ${checkoutItem.carrier_quantity}x`}</QuantityStyle>
                  <QuantityStyle>{`Price :  ${checkoutItem.price}`}</QuantityStyle>
                  <p>{`$ ${Number(
                    checkoutItem.price * checkoutItem.carrier_quantity
                  ).toFixed(2)}`}</p>
                </ValueStyle>
              </ConfirmationTableStyle>
            );
          })}
        </TableStyle>
        <TotalAndBackStyle>
          <p>{`Total: ${calculateTotal().toFixed(2)}`}</p>
          <BackButtonComponent text={"Back to Mira"}></BackButtonComponent>
        </TotalAndBackStyle>
      </ModalQueryStyle>
    </>
  );
}

const ConfirmationTableStyle = styled.div`
  display: flex;
  width: 100%;
  color: white;
  margin-top: 30px;
  justify-content: space-around;
  align-items: center;
`;

const ImageStyle = styled.img`
  width: 100px;
  height: 100px;
`;

const ArtNameStyle = styled.p`
  font-size: 23px;
  color: #db6d71;
  margin-bottom: 7px;
`;
const ValueStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    font-size: 20px;
  }
`;

const QuantityStyle = styled.div`
  display: flex;
  font-size: 12px;
  margin-bottom: 6px;
`;

const TableStyle = styled.div`
  overflow-y: scroll;
  width: 100%;
  margin-top: 50px;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #db6d71;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    border-radius: 10px;
  }
`;

const TotalAndBackStyle = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-around;
`;
