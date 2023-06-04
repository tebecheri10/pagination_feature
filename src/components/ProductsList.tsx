import {  FC } from "react";
import { useProducts } from "../hooks/useProducts";
import { usePagination } from "../hooks/usePagination";
import Pagination from "./Pagination";
import SingleProduct from "./SingleProduct";


const ProductsList: FC = () => {

  const { products } = useProducts();
  
  const {
    handleNextPage,
    handlePreviousPage,
    handleSpecificPage,
    currentPage,
    productsPerPage,
    firstIndex,
    lastIndex
  } = usePagination();

  return (
    <div className="products-container">
     <div className="products__list">
      {products.length &&
        products.map((product: ProductType) => (
          <SingleProduct
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        )).slice(firstIndex, lastIndex)}
     </div>
      <Pagination
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        productsQty={products}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleSpecificPage={handleSpecificPage}
      />
    </div>
  );
};

export default ProductsList;
