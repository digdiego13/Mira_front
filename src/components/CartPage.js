import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { postLogin } from "../service";
import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";
import ProductListComponent from "../shared/sharedComponents/ProductListComponent";
import { TiArrowBackOutline } from "react-icons/ti";
import { getCartList } from "../service";

export default function CartPage() {

    const [cartList, setCartList] = useState([1]);
    const {user} = useContext(UserContext);
    const history = useHistory();

    function loadCartList() {

        getCartList(user.token)
        .then((res)=> {
            setCartList(res.data);
        })
        .catch((err)=> {
            history.push('/');
            alert(err.response.data);
        })
    }
    
    useEffect(()=> {
        loadCartList()
    }, []);

    if(cartList[0] ===1) {
        return <p>Loading</p>
    }

    function calculateTotal() {
        let total = 0;
        cartList.forEach((item)=> {
            let artValue = item.price * item.carrier_quantity;
            total += artValue;
        })

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
          <h2></h2>
        </TableTitleStyle>
        <ProductListStyle>
            {cartList.map((cartItem) => {
                return <ProductListComponent cartItem={cartItem}></ProductListComponent>
            })}
        </ProductListStyle>
      </TableStyle>
      <TotalStyle>
          <p>{`Total:   ${calculateTotal().toFixed(2)}`}</p>
          <CheckoutStyle>Buy Now</CheckoutStyle>
      </TotalStyle>
      <div>
      <ReturnStyle to={'/'}>
          <TiArrowBackOutline></TiArrowBackOutline>
          Find more Arts!
      </ReturnStyle>
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
    display:flex;
    justify-content:space-between;
    width:100%;
`
const CheckoutStyle = styled.button`
    border-radius:5px;
    background-color: #DB6D71;
    height: 60px;
    padding:10px 30px;
    font-size: 25px;
    text-decoration:none;
    border: none;
    font-weight:700;
    margin-bottom: 40px;

    &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`

const ReturnStyle = styled(Link)`
    background-color: white;
    border-radius:40px;
    padding:5px 15px;
    font-size: 15px;
    text-decoration:none;
    border: none;
    font-weight:700;
    color: #DB6D71;

    &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
    
`