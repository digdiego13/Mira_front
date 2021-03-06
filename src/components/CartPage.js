import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";
import ProductListComponent from "../shared/sharedComponents/ProductListComponent";
import { getCartList } from "../service";
import BackButtonComponent from "../shared/sharedComponents/BackButtonComponent";
import PaymentComponent from "../shared/sharedComponents/PaymentComponent";

export default function CartPage() {
  const [cartList, setCartList] = useState([1]);
  const { user } = useContext(UserContext);
  const history = useHistory();

  function loadCartList() {
    if (!user) {
      alert("Please, Log-in to acess cart");
      history.push("/sign-in");
      return "";
    }
    getCartList(user.token)
      .then((res) => {
        setCartList(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
        history.push("/");
      });
  }
  useEffect(() => {
    loadCartList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cartList[0] === 1) {
    return <p>Loading</p>;
  }

  function calculateTotal() {
    let total = 0;
    cartList.forEach((item) => {
      let artValue = item.price * item.carrier_quantity;
      total += artValue;
    });

    return total;
  }
  return (
    <Container>
      <CartStyle>
        <h1>Carrinho</h1>
        <CartIcon></CartIcon>
      </CartStyle>
      <TableStyle>
        <TableTitleStyle>
          <h2>Produtos</h2>
          <h2>Descrição</h2>
          <h2>Valor</h2>
          <h2>-</h2>
        </TableTitleStyle>
        <ul>
          {cartList.length > 0 ? (
            cartList.map((cartItem) => {
              return (
                <ProductListComponent
                  key={cartItem.id}
                  cartItem={cartItem}
                  loadCartList={loadCartList}
                ></ProductListComponent>
              );
            })
          ) : (
            <p>Não há artes no Carrinho</p>
          )}
        </ul>
      </TableStyle>
      {cartList.length > 0 ? (
        <TotalStyle>
          <p>{`Total:   ${calculateTotal().toFixed(2)}`}</p>
          <PaymentComponent
            totalValue={calculateTotal().toFixed(2)}
          ></PaymentComponent>
        </TotalStyle>
      ) : (
        ""
      )}

      <div>
        <BackButtonComponent text={"Encontre mais artes"}></BackButtonComponent>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 100px auto;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
`;

const CartIcon = styled(BsCart4)`
  color: white;
  font-size: 60px;
  margin: 10px 0px;
`;

const CartStyle = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 50px;
  border-bottom: solid 6px;
  width: 100%;
  justify-content: space-between;
`;

const TableStyle = styled.div`
  width: 100%;
`;

const TableTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0px;
  border-bottom: solid 3px;
`;

const TotalStyle = styled.div`
  margin-top: 100px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
