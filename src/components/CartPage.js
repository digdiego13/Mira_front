import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";
import ProductListComponent from "../shared/sharedComponents/ProductListComponent";
import { getCartList } from "../service";
import ButtonBuyComponent from "../shared/sharedComponents/ButtonBuyComponent";
import BackButtonComponent from "../shared/sharedComponents/BackButtonComponent";

export default function CartPage() {
  const [cartList, setCartList] = useState([1]);
  const { user } = useContext(UserContext);
  const history = useHistory();

  function loadCartList() {
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
        <h1>Cart</h1>
        <CartIcon></CartIcon>
      </CartStyle>
      <TableStyle>
        <TableTitleStyle>
          <h2>Products</h2>
          <h2>Description</h2>
          <h2>Value</h2>
          <h2>-</h2>
        </TableTitleStyle>
        <ProductListStyle>
          {cartList.length>0? cartList.map((cartItem) => {
            return (
              <ProductListComponent
                key={cartItem.id}
                cartItem={cartItem}
                loadCartList={loadCartList}
              ></ProductListComponent>
            );
          }): <p>You dont have Any Arts In your Cart</p>}
        </ProductListStyle>
      </TableStyle>
      {cartList.length>0? <TotalStyle>
        <p>{`Total:   ${calculateTotal().toFixed(2)}`}</p>
        <ButtonBuyComponent></ButtonBuyComponent>
      </TotalStyle>
      :
      ''}
      
      <div>
        <BackButtonComponent text={"Find more Arts!"}></BackButtonComponent>
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
`;

const CartIcon = styled(BsCart4)`
  color: white;
  font-size: 100px;
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

const ProductListStyle = styled.ul``;

const TotalStyle = styled.div`
  margin-top: 100px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
