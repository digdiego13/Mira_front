import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  SignUpOrLoginButtonStyled,
  SignUpOrLoginInputStyled,
  SwitchSignUpLoginLinkStyled,
} from "../shared/sharedStyles/sharedStyles";
import { postSignUp } from "../service";
import styled from "styled-components";
import MiraPictureComponent from "../shared/sharedComponents/MiraPictureComponent";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [adress, setAdress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function userSignUp(event) {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("The confirmation password must be the same as your password");
      return;
    }
    const body = {
      email,
      password,
      username,
      adress,
    };
    setIsLoading(true);

    postSignUp(body)
      .then((response) => {
        setIsLoading(false);
        history.push("/sign-in");
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.status === 403) {
          alert("O e-mail inserido já está cadastrado.");
        } else if (err.response.status === 500) {
          alert("Erro de servidor");
        } else {
          alert(err.response.data);
        }
      });
  }

  return (
    <ContainerStyled>
      <MiraPictureComponent></MiraPictureComponent>
      <SignUpDataContainerStyled onSubmit={userSignUp}>
        <SignUpOrLoginInputStyled
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SignUpOrLoginInputStyled
          type="username"
          placeholder="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <SignUpOrLoginInputStyled
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SignUpOrLoginInputStyled
          type="password"
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <SignUpOrLoginInputStyled
          type="text"
          placeholder="Adress"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          required
        />
        <SignUpOrLoginButtonStyled
          type="submit"
          disabled={isLoading ? true : false}
          back={"login"}
          color={"login"}
          width={"login"}
        >
          Sign Up
        </SignUpOrLoginButtonStyled>
        <Link to={"/sign-in"} style={{ textDecoration: "none" }}>
          <SwitchSignUpLoginLinkStyled>
            Switch back to log in
          </SwitchSignUpLoginLinkStyled>
        </Link>
      </SignUpDataContainerStyled>
    </ContainerStyled>
  );
}

const SignUpDataContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

const ContainerStyled = styled.div`
  display: flex;
`;
