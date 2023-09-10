import { useEffect, useState } from 'react';
import { Category } from '../../models/Categories';

export function useFetchCategories() {
  const url = `${import.meta.env.VITE_API_URL}products/categories`;
  const consumer_key = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY;
  const consumer_secret = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET;
  const [categories, setCategories] = useState<Category[]>([]);
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
      .then((data) => setCategories(data))
      .finally(() => setIsLoading(false))
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { categories, isLoading, error };
}