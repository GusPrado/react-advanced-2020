import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  //TO MAKE THIS WORKS NEEDS TO REFACTOR 
  // USING USECALLBACK AS RECOMMENDED BELOW

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  /* getProducts must not be on dependency array
  but its included when save it by Lint 
  SOLUTION: add useCallback to getProducts function
  as stated on Final folder
  */

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts, url]);

  return {loading, products}
};
