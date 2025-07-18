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
        <button
          className={`text-sm cursor-pointer font-bold  rounded-2xl w-24 h-10 ${
            display
              ? "bg-red-500 text-red-200 hover:bg-red-600 "
              : "bg-green-800 text-green-200 hover:bg-green-900"
          }`}
          onClick={handleDisplay}
        >
          {display ? "Close" : "+ Create"}
        </button>
      </div>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          display ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <FormCreateProduct handleDisplay={handleDisplay} />
        </div>
      </div>
      <div className="mt-6">
        <ListProducts display={display} />
      </div>
    </div>
  );
}

export default Product;
