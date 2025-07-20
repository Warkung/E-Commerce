import { Link } from "react-router-dom";
import FormEditProduct from "../../components/admin/FormEditProduct";
import { IoArrowBack } from "react-icons/io5";

function EditProduct() {
  return (
    <div className=" ">
      <Link to="/admin/products" className="inline-block">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
          <IoArrowBack className="-ml-1 mr-2 h-5 w-5" />
          Back
        </button>
      </Link>
      <div className="">
        <FormEditProduct />
      </div>
    </div>
  );
}
export default EditProduct;
