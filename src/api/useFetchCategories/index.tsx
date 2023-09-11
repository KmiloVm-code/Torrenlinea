import { useEffect, useState } from 'react';
import { Category } from '../../models/Categories';

const consumer_key = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY;
const consumer_secret = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET;
const url = `${import.meta.env.VITE_API_URL}products/categories`;

export function useFetchCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
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
        setCategories(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { categories, isLoading, error };
}
