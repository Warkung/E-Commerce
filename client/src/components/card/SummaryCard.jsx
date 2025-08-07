function SummaryCard() {
  return (
    <div className="mx-auto mt-10">
      <div className="flex flex-wrap gap-4 ">
        {/* left */}
        <div className="w-1/4 ">
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
            ></textarea>
            <button className=" font-semibold mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:shadow-md  transition-color duration-200">
              Save Address
            </button>
          </div>
        </div>

        {/* right */}
        <div className="w-1/4">
          <div className="bg-gray-100 p-4 rounded-md shadow-md space-y-4">
            <h1 className="text-xl font-bold mb-4">Order Summary</h1>
            {/* Items List */}
            <div>
              <div className="flex justify-between items-end ">
                <div>
                  <span>Title: Item </span>
                  <span> x 1</span>
                  <p> $10.00</p>
                </div>
                <div className="text-right font-bold">
                  <p> $10.00</p>
                </div>
              </div>
              <hr />
            </div>

            <div>
              <div className="flex justify-between items-end ">
                <p>Shipping cost</p>
                <p>฿ 50.00</p>
              </div>
              <div className="flex justify-between items-end ">
                <p>Discount</p>
                <p>- ฿ 10.00</p>
              </div>
              <hr />
            </div>

            {/* Total */}
            <div>
              <div className="flex justify-between items-end ">
                <p className="font-bold text-2xl">Total</p>
                <p className=" font-bold text-2xl text-red-500">฿ 50.00</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default SummaryCard;
