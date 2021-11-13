import { useParams,Link } from 'react-router-dom';
import styled from 'styled-components';
import { getOneGallery } from '../service';

export default function GalleryPage() {
  const { idGallery } = useParams();

	console.log(idGallery);

  return (

    <AllGalleryPage>

      <TopBox>
        <GalleryBox>
          <h1>Nome da galeria</h1>
          <h2>Descrição: galeria muito reconhecida mundialmente, fundada em 1924, representa muito da arte popular brasileira.</h2>
          <h3>
            Endereço da galeria: <br/>
            Contato da galeria:           
          </h3>
        </GalleryBox>

        <ArtistsBox>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObGU4c1ZjiLmciF-SQstTqzT8Q7_WebqV_w&usqp=CAU" alt="foto de um artista" />
            <h1>jose</h1>
          </div>
        </ArtistsBox>
      </TopBox>
      
      <BottomBox>
      <p>Artes disponíveis</p>
        <ArtsBox>
          <Link to={`/art/`} style={{ textDecoration: 'none' }}>
              <OneArt> 
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObGU4c1ZjiLmciF-SQstTqzT8Q7_WebqV_w&usqp=CAU" alt = "imagem de uma obra de arte" />
                  <h1> nome da arte </h1>
                  <div> R$ 1000,00 </div>
                  <button> mais detalhes </button>
              </OneArt>
          </Link>          
          </ArtsBox>
      </BottomBox>      
    </AllGalleryPage>
  )
}

const GalleryBox = styled.div`
  background: #E5E5E5;
  width: 500px;
  height: 400px;
  border-radius: 8px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1{
    font-size: 40px;
    margin-bottom: 20px;
    margin-left: 40px;
    
  }
  h2{
    font-size: 18px;
    line-height: 1.7;
    text-align: start;
    margin-left: 40px;
    margin-right: 40px;
  }
  h3{
    font-size: 15px;
    text-align-last: right;
    margin-right: 40px;
    line-height: 1.7;
  }
`;
const ArtistsBox = styled.div`
  background: #E5E5E5;
  width: 500px;
  height: 400px;
  border-radius: 8px;
  div{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  img{
    width: 150px;
    height: 100px;
    border-radius: 50px;
  }
  h1{
    width: 200px;
    height: 40px;
    color: #000000;

  }
  overflow-y: scroll;
   
    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }

    &::-webkit-scrollbar-track {
    background: #DB6D71;
    border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #E5E5E5;
    border-radius: 10px;
    } 
`;

const ArtsBox = styled.div`
  background: #E5E5E5;
  width: 1300px;
  height: 250px;
  border-radius: 8px;
  display: flex;
  overflow-x: scroll;
   
    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }

    &::-webkit-scrollbar-track {
    background: #DB6D71;
    border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
    background-color: #E5E5E5;
    border-radius: 10px;
    } 

    p{
      color: #000000;
    }
`;

const OneArt = styled.div`
    background-color: #000000;
    font-size: 15px;
    width: 200px;
    height: 200px;
    margin: 20px 40px;
    border-radius: 10px;
    color: #DB6D71;
    text-align: center;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: auto;
    img{
        width: 120px;
        height: 120px;
        border-radius: 5px;
    }
    div{
        color: #E5E5E5;
        width: 100px;
        height: 10px;
        background-color: #000000;
        margin-top: 5px;
        font-size: 12px;
        margin-bottom: 5px;
    }
    button{
        width: 100px;
        height: 20px;
        border-radius: 10px;
        color: #E5E5E5;
        border-color: #DB6D71;
        background-color: #000000;
        margin-top: 5px;
        font-size: 12px;
        cursor: pointer;
    }
    h1{
        height: 15px;
    }
`
;

const TopBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const BottomBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    p{
      color: #E5E5E5;
      margin-top: 40px;
      margin-bottom: 5px;
      margin-left: 40px;
      font-size: 23px;
    }
`;
const AllGalleryPage = styled.div`
    width: 1300px;
    margin: 0 auto;
    margin-top: 100px;
`;


