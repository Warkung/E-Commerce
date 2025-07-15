import { useState } from "react";
import FormCreateProduct from "../../components/admin/FormCreateProduct";
import ListProducts from "../../components/admin/ListProducts";

function Product() {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div
            onClick={handleDisplay}
            className="relative w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
          ></div>
          <span
            onClick={handleDisplay}
            className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Create Form
          </span>
        </label>
      </div>
      {display && <FormCreateProduct />}
      <div className="mt-6">
        <ListProducts />
      </div>
    </div>
  );
}
export default Product;
