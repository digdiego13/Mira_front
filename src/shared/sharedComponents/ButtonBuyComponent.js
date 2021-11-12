import styled from "styled-components";
import ReactModal from "react-modal";
import { useState, useContext, useEffect } from "react";
import BackButtonComponent from "./BackButtonComponent";
import { getCheckoutList } from "../../service";
import UserContext from "../../contexts/UserContext";

export default function ButtonBuyComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checkoutList, setCheckoutList] = useState([1]);
  const { user } = useContext(UserContext);
  const [outOfStock, setOutOfStock] = useState(false)
  

  function loadCheckoutList() {
    getCheckoutList(user.token)
      .then((res) => {
        setCheckoutList(res.data);
      })
      .catch((err) => {
        if(err.response.status === 405) {
            setCheckoutList([]);
            setOutOfStock(true)
        }
        
      });
  }

  useEffect(() => {
    if(modalIsOpen){
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
      <CheckoutStyle onClick={() => setModalIsOpen(true)}>
        Buy Now{" "}
      </CheckoutStyle>
      <ModalQueryStyle
        isOpen={modalIsOpen}
        style={modalStyle}
        ariaHideApp={false}
      >
          {outOfStock? <h1>Unfotunatelly, we dont have all these arts on stock</h1> : <h1>Congrats, you just bought wonderful arts!</h1>}
        
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

const CheckoutStyle = styled.button`
  border-radius: 5px;
  background-color: #db6d71;
  height: 60px;
  padding: 10px 30px;
  font-size: 25px;
  text-decoration: none;
  border: none;
  font-weight: 700;
  margin-bottom: 40px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  content: {
    border: "none",
  },
};

const ModalQueryStyle = styled(ReactModal)`
  width: 50%;
  height: 70vh;
  padding: 60px 100px;
  margin: 20px auto;
  background-color: #333333;
  border: none;
  border-radius: 50px;
  font-size: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  color: #db6d71;
  outline: none;
`;
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
