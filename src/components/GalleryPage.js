import { useParams } from 'react-router-dom';

export default function GalleryPage() {
  const { idGallery } = useParams();

	console.log(idGallery);

  return <h1>Gallery Page</h1>;
}
