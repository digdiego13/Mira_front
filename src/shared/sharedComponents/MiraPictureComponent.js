import styled from "styled-components";



export default function MiraPictureComponent() {
    

    return (
        <ContainerStyled>
            <h1>Mira.</h1>
            <h2>Galleries, Arts and You. All together</h2>
        </ContainerStyled>
    )
}

const ContainerStyled = styled.div`
    width: 60vw;
    height:100vh;
    text-align:center;
    display: flex;
    flex-direction: column;
    justify-content:center;
    border-right: solid 5px #DB6D71;;
    border-radius: 40%;
    

    h1{
        font-size:200px;
        margin:30px;
        color: #DB6D71;
    }
     h2{
        font-size:30px;

    }

`