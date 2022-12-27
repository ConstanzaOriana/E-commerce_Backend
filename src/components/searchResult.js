import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { getProductsByQuery } from '../fetcher';
import CategoryProduct from './category_product';
import { useState, useEffect } from 'react';

const SearchResult = () => {

    const [products, setProducts] = useState({errorMessage : '', data: [] });

    const[searchParams] = useSearchParams();
    const query = searchParams.get('s');

    useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductsByQuery(query);
            setProducts(responseObject);
        };
        fetchData();
    }, [query]);

    const renderProducts = () => {
        return products.data.map((p) => 
          <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
        )
      }

  return (
    <div>
       {products.errorMessage && <div>Error : {products.errorMessage}</div>}
        {products.data && renderProducts()}
    </div>
  )
}

export default SearchResult;