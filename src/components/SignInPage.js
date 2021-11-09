import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  SignUpOrLoginButtonStyled,
  SignUpOrLoginInputStyled,
  SwitchSignUpLoginLinkStyled,
} from "../shared/sharedStyles/sharedStyles";
import UserContext from "../contexts/UserContext";
import { postLogin } from "../service";
import styled from "styled-components";
import MiraPictureComponent from "../shared/sharedComponents/MiraPictureComponent";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  function userLogin(event) {
    event.preventDefault();
    const body = { email, password };
    setIsLoading(true);

    postLogin(body)
      .then((response) => {
        setIsLoading(false);
        setUser({
          ...response.data,
        });
        const serializedUser = JSON.stringify({
          ...response.data,
        });

        localStorage.setItem("storedUser", serializedUser);
        history.push("/");
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.status === 500) {
          alert("Erro de servidor");
        } else if (err.response.status === 403) {
          alert("E-mail/senha incorretos");
        } else {
          alert("Problema no servidor");
        }
      });
  }

  return (
    <ContainerStyled>
      <MiraPictureComponent></MiraPictureComponent>
      <LoginDataContainerStyled onSubmit={userLogin}>
        <SignUpOrLoginInputStyled
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SignUpOrLoginInputStyled
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SignUpOrLoginButtonStyled
          type="submit"
          back={"login"}
          color={"login"}
          width={"login"}
          disabled={isLoading ? true : false}
        >
          Log In
        </SignUpOrLoginButtonStyled>
        <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
          <SwitchSignUpLoginLinkStyled>
            First time? Create an account!
          </SwitchSignUpLoginLinkStyled>
        </Link>
      </LoginDataContainerStyled>
    </ContainerStyled>
  );
}

const LoginDataContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;
const ContainerStyled = styled.div`
  display: flex;
`;
