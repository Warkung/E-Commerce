import { ShoppingCart } from "lucide-react";
import useEcomStore from "../../store/ecomStore";

function ProductCard({ product }) {
  const { actionAddToCart } = useEcomStore((state) => state);

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-lg shadow-lg p-4 transition-shadow hover:shadow-xl w-48">
      <div>
        <div className="flex justify-center items-center w-full h-32 bg-stone-200 rounded-md text-center shadow-inner text-stone-500">
          {product.images.length > 0 ? (
            <img
              src={product.images[0].url}
              alt={product.title}
              className="w-40 h-32 rounded-md hover:scale-105 transition-transform"
            />
          ) : (
            "No Image"
          )}
        </div>
      </div>
      <div className="mt-4">
        <p className="font-bold text-xl text-stone-800 text-nowrap overflow-hidden">
          {product.title}
        </p>
        <p className="text-stone-600 text-sm mt-1 text-nowrap overflow-hidden">
          {product.description}
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-2xl text-stone-800">
          {product.price.toLocaleString()}
        </span>
        <button
          onClick={() => actionAddToCart(product)}
          className="bg-stone-700 hover:bg-stone-800 text-white p-2 rounded-full shadow-md transition-colors"
        >
          <ShoppingCart />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
