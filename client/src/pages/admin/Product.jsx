import { useState } from "react";
import FormCreateProduct from "../../components/admin/FormCreateProduct";
import ListProduct from "../../components/admin/ListProduct";

function Product() {
  const [showcreateform, setShowCreateForm] = useState(false);

  const toggleCreateForm = () => {
    setShowCreateForm(!showcreateform);
  };

  return (
    <div className="">
      <div className="">
        <button
          onClick={toggleCreateForm}
          className={
            showcreateform
              ? "bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 w-24"
              : "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 w-24"
          }
        >
          {showcreateform ? 'Hide ' : "Create"}
        </button>
      </div>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showcreateform ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <FormCreateProduct toggleCreateForm={toggleCreateForm} />
        </div>
      </div>
      <ListProduct showcreateform={showcreateform} />
    </div>
  );
}
export default Product;
