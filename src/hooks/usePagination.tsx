import { useState } from 'react'

export const usePagination = ()=>{

  const [productsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  let lastIndex = currentPage * productsPerPage
  let firstIndex = lastIndex - productsPerPage

    const handleNextPage = ()=>{
      setCurrentPage((prev: number)=> prev + 1)
    }
    
    const handlePreviousPage = ()=>{
      setCurrentPage((prev: number)=> prev - 1)
    }
    
    const handleSpecificPage = (index:number) =>{
      setCurrentPage(index)
    }
  
    return {
      handleNextPage,
      handlePreviousPage,
      handleSpecificPage,
      firstIndex,
      lastIndex,
      currentPage,
      productsPerPage
    }
  }
  