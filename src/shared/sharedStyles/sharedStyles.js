import styled from "styled-components";
import ReactModal from "react-modal";

const SignUpOrLoginInputStyled = styled.input`
  width: 100%;
  height: 65px;
  margin-bottom: 13px;
  background-color: #fff;
  border-radius: 6px;
  border: none;
  padding-left: 17px;
  font-family: "Oswald", sans-serif;
  font-size: 27px;
  font-weight: 700;

  &::placeholder {
    color: #9f9f9f;
  }
`;
const SignUpOrLoginButtonStyled = styled.button`
  background-color: ${(props) =>
    props.back === "login" ? `#DB6D71` : `${props.back}`};
  height: 65px;
  border: none;
  border-radius: 6px;
  margin-bottom: 13px;
  width: ${(props) => (props.width === "login" ? `100%` : "48%")};
  font-size: 27px;
  font-weight: 700;
  color: ${(props) => (props.back === "login" ? `#FFF` : "black")};
  &:hover {
    cursor: pointer;
    filter: brightness(1.5);
  }
`;
const SwitchSignUpLoginLinkStyled = styled.p`
  color: #fff;
  font-family: "Lato", sans-serif;
  text-align: center;
  text-decoration: underline;
`;

const CheckoutStyle = styled.button`
  border-radius: 5px;
  background-color: #db6d71;
  height: 40px;
  padding: 10px 30px;
  font-size: 20px;
  text-decoration: none;
  border: none;
  font-weight: 700;
  margin-bottom: 20px;

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
  margin: 100px auto;
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

export {
  SignUpOrLoginButtonStyled,
  SignUpOrLoginInputStyled,
  SwitchSignUpLoginLinkStyled,
  CheckoutStyle,
  modalStyle,
  ModalQueryStyle,
};
