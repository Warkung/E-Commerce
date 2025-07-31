import { Trash2 } from "lucide-react";
import useEcomStore from "../../store/ecomStore";

function CartCard() {
  const { carts, actionUpdateQuantity } = useEcomStore((state) => state);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {/* border card */}
      <div className=" border px-4 py-2 rounded-xl">
        {/* Card */}
        {carts.map((cart, index) => (
          <div key={index} className="bg-white p-2 rounded-md shadow-md mb-2">
            {/*Row1*/}
            <div className="flex justify-between mb-2">
              {/*Row1 left */}
              <div className="flex gap-2 items-center">
                {/* img */}
                <div className="w-16 h-16 bg-gray-200 rounded-md text-center flex justify-center items-center">
                  <img
                    src={cart.images[0].url}
                    className="w-full h-full "
                    alt={cart.title}
                  />
                </div>
                {/* text */}
                <div>
                  <p className="font-bold text-nowrap overflow-hidden w-28">
                    {cart.title}
                  </p>
                  <p className="text-gray-500 text-sm text-nowrap overflow-hidden w-28">
                    {cart.description}
                  </p>
                </div>
              </div>
              {/*Row1 Right */}
              <div className="text-red-700 p-2">
                <Trash2 size={20} />
              </div>
            </div>

            {/*Row2*/}
            <div className="flex justify-between">
              {/* Row2 left */}
              <div className="border rounded px-1 py-1 text-xs ">
                <button
                  onClick={() => actionUpdateQuantity(cart.id, cart.count - 1)}
                  className="bg-gray-200 px-2 py-1 w-7 rounded hover:cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out "
                >
                  -
                </button>
                <span className="px-4 py-1">{cart.count}</span>
                <button
                  onClick={() => actionUpdateQuantity(cart.id, cart.count + 1)}
                  className="bg-gray-200 px-2 py-1 w-7 rounded hover:cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out "
                >
                  +
                </button>
              </div>
              {/* Row2 right */}
              <div className="font-bold text-blue-500 px-2">
                ${(cart.price * cart.count).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
        {/* Total */}
        <div className="flex justify-between px-2 mt-2">
          <span>Total:</span>
          <span>
            {carts
              .reduce((total, cart) => total + cart.price * cart.count, 0)
              .toLocaleString()}
          </span>
        </div>

        {/* Button */}
        <button className="text-sm w-full mt-4 bg-green-700 text-white px-4 py-1 rounded-md hover:cursor-pointer hover:bg-green-500 transition-all duration-300 ease-in-out">
          Checkout
        </button>
      </div>
    </div>
  );
}
export default CartCard;
