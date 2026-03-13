import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import PaginationControls from '../helpers/PaginationControls.jsx';
const itemsPerPage = 10;

const ProductContainer = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section>
      {currentItems.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>
            Rating:
            <strong>{product.rating}</strong>
          </p>
          <img src={product.image.url} alt={product.image.alt} />

          {product.discountedPrice < product.price ? (
            <>
              <p>
                <s>Price: {product.price}</s>
              </p>
              <p>Discount: {product.discountedPrice}</p>
            </>
          ) : (
            <p>Price: {product.price}</p>
          )}

          <Link to="/product/$productId" params={{ productId: product.id }}>
            See details
          </Link>
        </div>
      ))}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <p>
        Showing page {currentPage} of {totalPages}
      </p>
    </section>
  );
};

export default ProductContainer;
