import { useEffect, useState } from 'react'

export const useProducts = () =>{
    const [ products, setProducts ] = useState<ProductType[]>([])

    const getProductsList = async():Promise<void>=>{
        const url = 'https://fakestoreapi.com/products/'
        const response = await fetch(url);
        const data = await response.json();
        
        setProducts(data);
    }
    
    useEffect(()=>{
        getProductsList()
    },[])

    return {
        products
    }
}