import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getOneGallery } from '../service';

export default function GalleryPage() {
  const { idGallery } = useParams();

	console.log(idGallery);

  return <TitleStyled>Estou na Gallery Page</TitleStyled>;
}
const TitleStyled = styled.div`
    background: #000000;
    color: #E5E5E5;
    margin-bottom: 5px;
    margin-top: 70px;
    margin-left: 40px;
    font-size: 50px;
`;
