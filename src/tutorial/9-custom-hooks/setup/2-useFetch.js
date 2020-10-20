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

  // useEffect(() => {
  //   getProducts();
  // }, [getProducts, url]);

  return {loading, products}
};
