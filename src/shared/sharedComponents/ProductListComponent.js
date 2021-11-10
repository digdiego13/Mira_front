import styled from "styled-components";

export default function ProductListComponent({cartItem}) {

  return (
    <ProductList>
      <ImageStyle src={String(cartItem.art_photo)} alt={"Art photo"}></ImageStyle>
      <div>
          <ArtNameStyle>{cartItem.art_name}</ArtNameStyle>
          <p>{cartItem.artist_name}</p>
      </div>
      <ValueStyle>
          <QuantityStyle>{`Qtd :  ${cartItem.carrier_quantity}x`}</QuantityStyle>
          <QuantityStyle>{`Price :  ${cartItem.price}`}</QuantityStyle>
          <p>{`$ ${Number(cartItem.price * cartItem.carrier_quantity).toFixed(2)}`}</p>
      </ValueStyle>
      <CancelButton>
          Cancel
      </CancelButton>
    </ProductList>
  );
}

const ProductList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const ImageStyle = styled.img`
    width:100px;
    height: 100px;

`

const ArtNameStyle = styled.p`
    font-size: 23px;
    color: #DB6D71;
    margin-bottom: 7px;
`
const ValueStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
`

const QuantityStyle = styled.div`
    display: flex;
    font-size: 12px;
    margin-bottom: 6px;
    
`

const CancelButton = styled.button`
    border-radius:5px;
    color: red;
    height: 30px;
    text-decoration:none;
    border: none;

    &:hover {
    cursor: pointer;
    filter: brightness(1.3);
  }

`