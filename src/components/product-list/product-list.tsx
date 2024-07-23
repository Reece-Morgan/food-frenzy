import { useEffect, useState } from "react";
import { Product } from "../../types";
import ProductDetails from "../product-details/product-details";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json"
      );
      const data: Product[] = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      {!products || products.length === 0 ? (
        <p>No Products Available</p>
      ) : (
        <>
          {products.map((product: Product) => (
            <ProductDetails key={product.id} product={product} />
          ))}
        </>
      )}
    </>
  );
}

export default ProductList;
