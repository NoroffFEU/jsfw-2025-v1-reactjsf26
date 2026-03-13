import { useNavigate } from 'react-router-dom';

const CheckoutSuccessPage = () => {
  const navigate = useNavigate();

  const handleGoHomeClick = () => {
    navigate('/');
  };

  return (
    <>
      <h1>CheckoutSuccessPage</h1>
      <button onClick={handleGoHomeClick}>Back to Home Page</button>
    </>
  );
};

export default CheckoutSuccessPage;
