import { FC } from "react";

interface PaginationProps {
  productsQty: ProductType[];
  productsPerPage:number;
  currentPage: number;
  handleNextPage: ()=>void;
  handlePreviousPage:()=>void;
  handleSpecificPage:(index:number)=>void;
}

const Pagination: FC<PaginationProps> = ({
  productsQty,
  productsPerPage,
  currentPage,
  handleNextPage,
  handlePreviousPage,
  handleSpecificPage,
}) => {

  return (
    <nav
      className="pagination is-centered pagination__container"
      role="navigation"
      aria-label="pagination"
    >
      <a
        className={`pagination-previous ${currentPage === 1 && "is-disabled"}`}
        onClick={handlePreviousPage}
      >
        Previous
      </a>
     
      <ul className="pagination-list">
        {productsQty.map((product: ProductType, i: number) => {
          let realIndex = i + 1;

          return (
            i < Math.ceil(productsQty.length / productsPerPage) && (
              <li key={product.id}>
                <a
                  onClick={() => {handleSpecificPage(realIndex)}}
                  className={`pagination-link ${realIndex === currentPage && "is-current"}`}
                >
                  {realIndex}
                </a>
              </li>
            )
          );
        })}
      </ul>
      <a
        className={`pagination-next ${
          currentPage === Math.ceil(productsQty.length / productsPerPage) &&
          "is-disabled"
        }`}
        onClick={handleNextPage}
      >
        Next page
      </a>
    </nav>
  );
};

export default Pagination;
