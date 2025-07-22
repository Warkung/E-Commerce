import { useEffect } from "react";
import ProductCard from "../components/card/ProductCard";
import useEcomStore from "../store/ecomStore";

function ShopPage() {
  const { products, actionGetProducts } = useEcomStore((state) => state);

  useEffect(() => {
    actionGetProducts();
  }, []);

  return (
    <div className="flex h-screen  ">
      {/* search Bar */}
      <div className="w-1/4 bg-gray-200 p-4  ">Search Bar</div>
      {/* product list */}
      <div className="w-3/4 bg p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="flex flex-wrap mx-4 gap-4  ">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      {/* cart */}
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">Cart</div>
    </div>
  );
}
export default ShopPage;
