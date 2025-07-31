import { useEffect } from "react";
import ProductCard from "../components/card/ProductCard";
import useEcomStore from "../store/ecomStore";
import SearchCard from "../components/card/SearchCard";
import CartCard from "../components/card/CartCard";

function ShopPage() {
  const { products, actionGetProducts } = useEcomStore((state) => state);

  useEffect(() => {
    actionGetProducts();
  }, []);

  return (
    <div className="flex ">
      {/* search Bar */}
      <div className="w-1/4 bg-gray-200 p-4  ">
        <SearchCard />
      </div>

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
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
        <CartCard />
      </div>
    </div>
  );
}
export default ShopPage;
