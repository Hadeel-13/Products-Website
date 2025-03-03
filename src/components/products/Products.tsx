import ProductCard from "./ProductCard";
import { Layout } from "../shared/Layout";
import IProduct from "@/interfaces/product";
import { useEffect, useState } from "react";
import ProductsSkelton from "./ProductsSkelton";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/?limit=20"
        );
        if (!response.ok) {
          throw Error("Failed to fetch products");
        }
        const data = await response.json();
        if (isMounted) {
          setProducts(data.products);
        }
      } catch (err) {
        if (isMounted) {
          console.log(err instanceof Error ? err.message : "An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);
  if (loading) return <ProductsSkelton />;
  return (
    <Layout variant={"products"}>
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Layout>
  );
}
