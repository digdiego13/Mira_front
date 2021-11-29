import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArts } from "../../service";

export default function Arts() {
  const [artsFound, setArtsFound] = useState("");

  useEffect(() => {
    getArts()
      .then((res) => {
        setArtsFound(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TitleStyled>Para comprar ou saber mais, escolha uma arte:</TitleStyled>
      <AllArts>
        {artsFound !== ""
          ? artsFound.map((art) => {
              return (
                <OneArt>
                  <img src={art.art_photo} alt="imagem de uma obra de arte" />
                  <p> {art.art_name} </p>
                  {art.quantity > 0 ? (
                    <div> R$ {art.price},00 </div>
                  ) : (
                    <div> Produto Indisponível </div>
                  )}
                  <Link
                    key={art.id}
                    to={`/art/${art.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <button> mais detalhes </button>
                  </Link>
                </OneArt>
              );
            })
          : ""}
      </AllArts>
    </>
  );
}
const TitleStyled = styled.div`
  background: #000000;
  color: #e5e5e5;
  margin: 50px 0 0 40px;
  font-size: 25px;
`;

const AllArts = styled.div`
  height: 1000px;
  background: #e5e5e5;
  margin: 10px 40px 50px 40px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #db6d71;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    border-radius: 10px;
  }
`;

const OneArt = styled.div`
  background-color: #000000;
  font-size: 15px;
  width: 250px;
  height: 300px;
  margin: 20px 40px;
  border-radius: 10px;
  color: #db6d71;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 2px 10px 4px gray;
  img {
    width: 180px;
    height: 180px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  div {
    color: #e5e5e5;
    width: 100px;

    background-color: #000000;
    margin-top: 5px;
    font-size: 12px;
    margin-bottom: 5px;
  }
  button {
    width: 100px;
    height: 20px;
    border-radius: 10px;
    color: #e5e5e5;
    border-color: #db6d71;
    background-color: #000000;
    margin-top: 5px;
    font-size: 12px;
    cursor: pointer;
  }
  p {
    font-size: 20px;
    height: 15px;
    margin-bottom: 5px;
  }
`;
