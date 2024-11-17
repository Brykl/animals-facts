import { useLocation } from 'react-router-dom';
import DenseAppBar from "../modules/appBar";

function CardDetailPage() {
  const location = useLocation();
  const text = location.state?.text;  

  return (
    <>
    <DenseAppBar />
    <div>
      <h1>Card Details</h1>
      <p>Text: {text}</p>
    </div>
    </>
  );
}

export default CardDetailPage;
