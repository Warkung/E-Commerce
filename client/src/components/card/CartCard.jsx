import { Trash2 } from "lucide-react";

function CartCard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {/* border */}
      <div className=" border px-4 py-2 rounded">
        {/* Card */}
        <div className="bg-white p-2 rounded-md shadow-md">
          {/*Row1*/}
          <div className="flex justify-between mb-2">
            {/*Row1 left */}
            <div className="flex gap-2 items-center">
              {/* img */}
              <div className="w-16 h-16 bg-gray-200 rounded-md text-center flex justify-center items-center">
                No Image
              </div>
              {/* text */}
              <div>
                <p className="font-bold">Title</p>
                <p className="text-gray-500 text-sm">Desciption</p>
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
              <button className="bg-gray-200 px-2 py-1 w-7 rounded hover:cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out ">
                -
              </button>
              <span className="px-4 py-1">1</span>
              <button className="bg-gray-200 px-2 py-1 w-7 rounded hover:cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out ">
                +
              </button>
            </div>
            {/* Row2 right */}
            <div className="font-bold text-blue-500 px-2">$1000</div>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between px-2 mt-2">
          <span>Total:</span>
          <span>$1000</span>
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
