import styled from 'styled-components';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {

    return (
        <> 
            <HeaderStyled >  

                <div> 
                    Nossa Missão:
                    <p>“Reunir as galerias do Brasil inteiro em um só lugar <br/> e possibilitar o acesso de suas obras". </p>
                </div>

                <div> 
                    Mira nas redes sociais 
                    <p> <InstaIcon/> /artes_mira </p>
                    <p> <TelegramIcon/> (21) 91234-1234 </p>
                    <p> <WhatsIcon/> (21) 91234-1234 </p>
                </div>

                <div> 
                    Contate-nos através do email 
                    <p> <EmailIcon/> artes_mira@mira.com.br </p>
                </div>
                   
            </ HeaderStyled >   
        </>  
    )
}

const HeaderStyled = styled.header`
    width: 100vw;
    height: 150px;
    background: #000000;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 1;
    display: flex; 
    justify-content: space-around;
    align-items: center;
    padding: 10px;

    div{
        font-size: 19px;
        line-height: 2.5;
    }
    p{
        font-size: 15px;
        margin-bottom: 1.5px;
        background-color: #000000;
        display: flex;
        justify-content: right;
        align-items: center;
    }
`;
const WhatsIcon = styled(FaWhatsapp)`
    color: #DB6D71;    
    width: 25px;
    height: 25px;
    background: #000000;
    font-size: 19px;
    margin-right: 10px;
`;

const TelegramIcon = styled(FaTelegramPlane)`
    color: #DB6D71;      
    width: 25px;
    height: 25px;
    background: #000000;
    font-size: 19px;
    margin-right: 10px;
`;

const InstaIcon = styled(FaInstagram)`
    color: #DB6D71;      
    width: 25px;
    height: 25px;
    background: #000000;
    font-size: 19px;
    margin-right: 10px;
`;

const EmailIcon = styled(AiOutlineMail)`
    color: #DB6D71;      
    width: 25px;
    height: 25px;
    background: #000000;
    font-size: 19px;
    margin-right: 10px;
`;



