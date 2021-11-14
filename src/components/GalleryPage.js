import { useParams,Link } from 'react-router-dom';
import styled from 'styled-components';
import { getOneGallery } from '../service';
import { useEffect, useState } from 'react';

export default function GalleryPage() {
  const { idGallery } = useParams();

    const [galleryFound, setGalleryFound] = useState("")

    useEffect(() => {
      getOneGallery(idGallery)
        .then((res) => {    
          setGalleryFound(res.data)                         
        }) 
        .catch((error) => {     
            console.log(error)                                
        });                       
    }, [idGallery]);


  return (

    <AllGalleryPage>

      <TopBox>
        <GalleryBox>
          {galleryFound !== "" ?
            <>
              <h1>{galleryFound[0].galery_name}</h1>
              <h2>Descrição: {galleryFound[0].description}</h2>
              <h3>
                Endereço da galeria: {galleryFound[0].adress} <br/>
                Contato da galeria: {galleryFound[0].phone_number}          
              </h3>
            </>
          :
          ""
          }
        </GalleryBox>
        <ArtistsBox>
          <p>Artistas presentes nesta galeria:</p>
          {galleryFound !== "" ?
            (galleryFound.map((gallery, index) => {
              return(
                <div key={index}>
                  <img src={gallery.artistPhoto} alt="foto de um artista" />
                  <h1>{gallery.artist_name}</h1>
                </div>
              )
            }))
          :
          ""
          }
        </ArtistsBox>
      </TopBox>
      <BottomBox>
      <p>Artes disponíveis</p>
        <ArtsBox>
        {galleryFound !== "" ?
            (galleryFound.map((gallery, index) => {   
              return(
                <Link key={index} to={`/art/${gallery.idStock}`} style={{ textDecoration: 'none' }}>
                  <OneArt> 
                      <img src ={gallery.art_photo}alt = "imagem de uma obra de arte" />
                      <h1> {gallery.art_name} </h1>
                      <div> R$ {gallery.price},00 </div>
                      <button> mais detalhes </button>
                  </OneArt>
              </Link> 
              )       
        }))
      :
      ""
      } 
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
    margin-bottom: 30px;
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
  p{
    width: 400px;
    height: 40px;
    margin: 20px 0 10px 50px;
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