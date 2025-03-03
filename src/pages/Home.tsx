import ProductForm from "@/components/products/ProductForm";
import Products from "@/components/products/Products";
import { Layout } from "@/components/shared/Layout";

export default function Home() {
  return (
    <div className="min-h-dvh bg-gray-50">
      <Layout>
        <ProductForm />
        <h1 className="text-3xl font-bold">Our Products</h1>
        <Products />
      </Layout>
    </div>
  );
}
