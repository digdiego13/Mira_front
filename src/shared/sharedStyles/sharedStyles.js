import styled from "styled-components";

const SignUpOrLoginInputStyled = styled.input`
    width: 100%;
    height: 65px;
    margin-bottom: 13px;
    background-color: #FFF;
    border-radius: 6px;
    border: none;
    padding-left: 17px;
    font-family: 'Oswald', sans-serif;
    font-size: 27px;
    font-weight: 700;
    
    &::placeholder{
        color: #9F9F9F;
    }
`
const SignUpOrLoginButtonStyled = styled.button`
    background-color: ${props => props.back === 'login'? `#DB6D71`: `${props.back}`};
    height: 65px;
    border: none;
    border-radius: 6px;
    margin-bottom: 13px;
    width:  ${props => props.width === 'login'? `100%`: '48%'};
    font-size: 27px;
    font-weight: 700;
    color: ${props => props.back === 'login'? `#FFF`: 'black'};
    &:hover{
        cursor: pointer;
        filter: brightness(1.5);
    }
    
`
const SwitchSignUpLoginLinkStyled = styled.p`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    text-align: center;
    text-decoration: underline;
     
`


export {
    SignUpOrLoginButtonStyled,
    SignUpOrLoginInputStyled,
    SwitchSignUpLoginLinkStyled
}
