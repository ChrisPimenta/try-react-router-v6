import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  // Navigate redirect replace on navigation stack
  const navigateToWelcomeWithNoReturn = () => {
    navigate('/welcome', { replace: true });
  }

  // Navigate redirect replace on navigation stack
  const navigateToWelcomeWithAndReturn = () => {
    navigate('/welcome');
  }

  /*
  navigate(-1) = go back
  navigate(+1) = go foward
  */

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul>
      <button onClick={navigateToWelcomeWithNoReturn}>Go to Welcome and never return</button>
      <button onClick={navigateToWelcomeWithAndReturn}>Go to Welcome and return using back</button>
    </section>
  );
};

export default Products;
