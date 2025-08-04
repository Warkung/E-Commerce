import { ListCheck } from "lucide-react";
import useEcomStore from "../../store/ecomStore";
import { Link } from "react-router-dom";

function ListCart() {
  const { carts, getTotalPrice } = useEcomStore((state) => state);

  return (
    <div className="max-w-6xl mx-auto mt-6">
      {/* Header */}
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="flex gap-2 items-center mb-4">
          <ListCheck size={24} />
          <p className="text-lg sm:text-xl font-bold">
            Product list, {carts.length} items
          </p>
        </div>
        {/*Cart Body*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left */}
          <div className="lg:col-span-2">
            {/* Card */}
            {carts.map((cart) => (
              <div
                key={cart.id}
                className="bg-white p-2 rounded-md shadow-md mb-2"
              >
                {/*Row1*/}
                <div className="flex justify-between items-start sm:items-center gap-2">
                  {/*Row1 left */}
                  <div className="flex gap-2 items-center">
                    {/* img */}
                    <div className="w-20 h-20 shadow bg-gray-200 rounded-md text-center flex justify-center items-center flex-shrink-0">
                      {cart.images.length !== 0 ? (
                        <img
                          src={cart.images[0].url}
                          className="w-full h-full rounded-md object-contain"
                          alt={cart.title}
                        />
                      ) : (
                        <span className="text-gray-500 text-sm">No Image</span>
                      )}
                    </div>
                    {/* text */}
                    <div className="ml-2 sm:ml-4">
                      <p className="font-bold break-words">{cart.title}</p>
                      <p className="text-gray-500 text-sm">
                        ${cart.price.toLocaleString()} x {cart.count}
                      </p>
                    </div>
                  </div>
                  {/*Row1 Right */}
                  <div className="font-bold text-blue-500 px-2">
                    ${(cart.price * cart.count).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right */}
          <div className=" bg-white px-6 py-4 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Total</h1>
            <div className="flex justify-between mb-2">
              <span>Totle Price</span>
              <span>{getTotalPrice().toLocaleString()}</span>
            </div>
            <button className="text-sm font-bold shadow w-full mt-4 bg-green-700 text-white px-4 py-1 rounded-md hover:cursor-pointer hover:bg-green-500 transition-all duration-300 ease-in-out">
              Checkout
            </button>
            <Link to={"/shop"}>
              <button className="text-sm font-bold shadow w-full mt-2 bg-gray-700 text-white px-4 py-1 rounded-md hover:cursor-pointer hover:bg-gray-500 transition-all duration-300 ease-in-out">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListCart;
