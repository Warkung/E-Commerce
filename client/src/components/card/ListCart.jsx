import { ListCheck } from "lucide-react";
import useEcomStore from "../../store/ecomStore";
import { Link } from "react-router-dom";
import { createUserCart } from "../../api/user";

function ListCart() {
  const { getTotalPrice, user, token } = useEcomStore((state) => state);
  const cart = useEcomStore((state) => state.carts);

  const handleSaveCart = async () => {
    try {
      const res = await createUserCart(token, { cart });
      console.log(res);
    } catch (error) {
      console.error("Error saving cart:", error);
      // Optionally, you can show a notification or alert to the user
      alert("Failed to save cart. Please try again later.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-6">
      {/* Header */}
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="flex gap-2 items-center mb-4">
          <ListCheck size={24} />
          <p className="text-lg sm:text-xl font-bold">
            Product list, {cart.length} items
          </p>
        </div>
        {/*Cart Body*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left */}
          <div className="lg:col-span-2">
            {/* Card */}
            {cart.map((cart) => (
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
              <span>Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>User</span>
              <span>{user ? user.email : "Guest"}</span>
            </div>
            {/* Checkout Button */}
            {user ? (
              <button
                onClick={handleSaveCart}
                className="text-xl font-bold shadow w-full mt-4 bg-green-800 text-white px-4 py-3 rounded-md hover:cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in-out"
              >
                {`Checkout : $${getTotalPrice().toLocaleString()}`}
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="text-sm font-bold shadow w-full mt-4 bg-blue-700 text-white px-4 py-1 rounded-md hover:cursor-pointer hover:bg-blue-500 transition-all duration-300 ease-in-out">
                  Login to Checkout
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListCart;
