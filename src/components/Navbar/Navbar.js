import styled from 'styled-components';
import SearchDesktop from './SearchDesktop'
import { Link, useHistory } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function Navbar() {
    
    const history = useHistory();

    function logoutRedirect(){      
            history.push("/sign-in")           
    }

    function cartRedirect(){      
            history.push("/cart")           
    }

    return (
        <> 
            <HeaderStyled >  
                <TitleStyled>
                    <Link style={{textDecoration:'none', color:'#FFF'}} to="/">
                        <p>Mira</p>
                    </Link>
                </TitleStyled> 
                <SearchDesktop/>
                <RightHeaderStyled>                                           
                    <CartIcon onClick={cartRedirect} />
                    <LogoutIcon onClick={logoutRedirect} />                  
                </RightHeaderStyled>
            </ HeaderStyled >   
        </>  
    )
}

const TitleStyled = styled.title`
    font-family: Passion One;    
    width: 200px;
    font-weight: bold;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 28px;
    p{
        color: #DB6D71;  
    }
`;

const HeaderStyled = styled.header`
    width: 100vw;
    height: 72px;
    background: #E5E5E5;
    display: flex; 
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
    justify-content: space-between;
`;
const CartIcon = styled(AiOutlineShoppingCart)`
    color: #000000;    
    width: 35px;
    height: 45px;
    padding: 0 10px 0 10px;
    background: #E5E5E5;
    border-color: #FFFFFF;
    border-radius: 8px;
    outline: 0;
    font-family: Lato;
    font-size: 19px;
    cursor: pointer;
    margin-right: 10px;
`;
const LogoutIcon = styled(AiOutlineLogout)`
    color: #000000;    
    width: 35px;
    height: 45px;
    padding: 0 10px 0 10px;
    background: #E5E5E5;
    border-color: #FFFFFF;
    border-radius: 8px;
    outline: 0;
    font-family: Lato;
    font-size: 19px;
    cursor: pointer;
    margin-right: 10px;
`;
const RightHeaderStyled = styled.header`
    width: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: center;  
`;

