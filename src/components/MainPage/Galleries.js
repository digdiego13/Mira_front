import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGalleries } from "../../service";

export default function Galleries() {
  const [galleriesFound, setGalleriesFound] = useState("");

  useEffect(() => {
    getGalleries()
      .then((res) => {
        setGalleriesFound(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <TitleStyled>Galerias que você irá encontrar</TitleStyled>
      <AllGalleries>
        {galleriesFound !== ""
          ? galleriesFound.map((gallery) => {
              return (
                <Link
                  key={gallery.id}
                  to={`/gallery/${gallery.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <OneGallery> {gallery.galery_name} </OneGallery>
                </Link>
              );
            })
          : ""}
      </AllGalleries>
    </Container>
  );
}

const TitleStyled = styled.div`
  background: #000000;
  color: #e5e5e5;
  margin-bottom: 5px;
  margin-left: 40px;
  font-size: 25px;
`;

const AllGalleries = styled.div`
  height: 130px;
  background: #e5e5e5;
  margin: 0px 40px 50px 40px;
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

const OneGallery = styled.p`
  background-color: #000000;
  font-size: 25px;
  width: 140px;
  height: 100px;
  margin-left: 40px;
  border-radius: 10px;
  color: #db6d71;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
`;

const Container = styled.div`
  margin-bottom: 100px;
`;
