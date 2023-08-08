import { useEffect, useState } from 'react';
import { Product } from '../../models/Product';

export function useFetchProducts(url: string) {
  const consumer_key = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY;
  const consumer_secret = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(
          `${consumer_key}:${consumer_secret}`,
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false))
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading, error };
}