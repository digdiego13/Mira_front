import styled from "styled-components";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function BackButtonComponent({ text, route }) {
  return (
    <ReturnStyle to={route? '/cart': '/'}>
      <TiArrowBackOutline></TiArrowBackOutline>
      {text}
    </ReturnStyle>
  );
}

const ReturnStyle = styled(Link)`
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
