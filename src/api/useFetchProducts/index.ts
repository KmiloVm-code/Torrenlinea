async function useFetchProducts(params: string | number) {
  const consumer_key = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY;
  const consumer_secret = import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET;
  const url = `${import.meta.env.VITE_API_URL}products/?${params}&status=publish`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${consumer_key}:${consumer_secret}`)}`,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error as string);
  }
}

export default useFetchProducts;