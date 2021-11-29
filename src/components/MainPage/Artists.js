import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArtists } from "../../service";

export default function Artists() {
  const [artistsFound, setArtistsFound] = useState("");

  useEffect(() => {
    getArtists()
      .then((res) => {
        setArtistsFound(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TitleStyled>Conheça os artistas</TitleStyled>

      <AllArtists>
        {artistsFound !== ""
          ? artistsFound.map((artist) => {
              return (
                <Link to={`/artist`} style={{ textDecoration: "none" }}>
                  <OneArtist>
                    <img src={artist.photo} alt="foto de um artista" />
                    {artist.artist_name}
                  </OneArtist>
                </Link>
              );
            })
          : ""}
      </AllArtists>
    </>
  );
}

const TitleStyled = styled.div`
  background: #000000;
  color: #e5e5e5;
  margin-top: 40px;
  margin-bottom: 5px;
  margin-left: 40px;
  font-size: 25px;
`;

const AllArtists = styled.div`
  height: 110px;
  background: #e5e5e5;
  margin-bottom: 50px;
  margin-left: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  overflow-x: scroll;

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

const OneArtist = styled.div`
  background-color: #000000;
  font-size: 15px;
  width: 140px;
  height: 80px;
  margin-left: 40px;
  border-radius: 10px;
  color: #db6d71;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-top: 5px;
    margin-right: 5px;
  }
`;
