import { useEffect, useState } from "react";
import { getUserCart } from "../../api/user";
import useEcomStore from "../../store/ecomStore";
import { saveAddress } from "../../api/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SummaryCard() {
  const { user, token } = useEcomStore((state) => state);
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [haveAddresses, setHaveAddresses] = useState(false);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const response = await getUserCart(token);
      setProducts(response.data.products);
      setCartTotal(response.data.cartTotal);
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  };

  const handleSaveAddress = async () => {
    if (!address) {
      return toast.warn("Please enter a shipping address");
    }
    try {
      await saveAddress(token, address);
      setHaveAddresses(true);
      toast.success("Address saved successfully!");
    } catch (error) {
      console.log("Failed to save address:", error);
      toast.error("Failed to save address");
    }
  };

  const handlePayment = () => {
    if (!haveAddresses) {
      return toast.warn("Please fill in the address.");
    }
    navigate("/user/payment");
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="mx-auto w-full p-6 max-w-6xl bg-white rounded-lg shadow-md">
      <div className="flex gap-4 justify-between ">
        {/* left */}
        <div className="w-5/12 ">
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h1 className="text-xl font-bold mb-4">Shipping Address</h1>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              className="w-full h-24 border border-gray-300 rounded-md p-2 "
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <button
              onClick={handleSaveAddress}
              className=" font-semibold mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:shadow-md  transition-color duration-200"
            >
              Save Address
            </button>
          </div>
        </div>

        {/* right */}
        <div className="w-7/12">
          <div className="bg-gray-100 p-4 rounded-md shadow-md space-y-4">
            <h1 className="text-xl font-bold mb-4">Order Summary</h1>

            {/* Items List */}

            {products.map((product, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-between items-end mb-2 ">
                    <div>
                      <p className="font-bold">{product.product.title}</p>
                      <p>
                        {product.product.price} x {product.count}
                      </p>
                    </div>
                    <div className="text-right font-bold">
                      <p>
                        ฿{" "}
                        {(
                          product.product.price * product.count
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Divider */}
            <div>
              <div className="flex justify-between items-end ">
                <p>Shipping cost</p>
                <p>฿ 0.00</p>
              </div>

              <div className="flex justify-between items-end ">
                <p>Discount</p>
                <p>- ฿ 0.00</p>
              </div>
              <hr />
            </div>

            {/* Total */}
            <div>
              <div className="flex justify-between items-end ">
                <p className="font-bold text-2xl">Total</p>
                <p className=" font-bold text-2xl text-red-500">
                  ฿ {cartTotal.toLocaleString()}
                </p>
              </div>

              {/* <button
                onClick={handlePayment}
                className="w-64 mt-4 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 hover:shadow-md transition-color duration-200"
              >
                Checkout
              </button> */}
              <button
                onClick={handlePayment}
                className={
                  haveAddresses
                    ? "w-64 mt-4 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 hover:shadow-md transition-color duration-200"
                    : "w-64 mt-4 bg-gray-700 text-white px-4 py-2 rounded-md "
                }
              >
                {haveAddresses ? "Check Out" : "Please fill in the address."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SummaryCard;
