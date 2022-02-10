import { useParams } from 'react-router-dom';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <>detail page id: {id}</>;
};

export default DetailPage;
