import { useEffect, useState } from 'react';
import { Product } from '../../models/Product';

const consumer_key = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY;
const consumer_secret = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET;

export function useFetchProducts(url: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(
              `${consumer_key}:${consumer_secret}`,
            )}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { products, isLoading, error };
}
