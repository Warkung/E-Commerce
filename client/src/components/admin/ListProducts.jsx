import { useEffect } from "react";
import useEcomStore from "../../store/ecomStore";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../api/product";
import { Pencil, Trash2 } from "lucide-react";

function ListProducts({ display }) {
  const { products, actionGetProducts, token } = useEcomStore((state) => state);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this product?")) {
        const res = await deleteProduct(token, id);
        actionGetProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    actionGetProducts(20);
  }, [display]);

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="px-4 py-3 text-center leading-4 font-medium  uppercase tracking-wider">
              Product name
            </th>
            <th className="px-4 py-3  text-center leading-4 font-medium  uppercase tracking-wider">
              Images
            </th>
            <th className="px-3 py-3  text-center leading-4 font-medium  uppercase tracking-wider">
              Category
            </th>
            <th className="px-4 py-3 text-center leading-4 font-medium  uppercase tracking-wider">
              Price
            </th>
            <th className="px-2 py-3  text-center leading-4 font-medium  uppercase tracking-wider">
              Sold
            </th>
            <th className="px-2 py-3  text-center leading-4 font-medium  uppercase tracking-wider">
              Stock
            </th>
            <th className=" py-3  text-center leading-4 font-medium  uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => {
            return (
              <tr key={product.id} className="hover:bg-gray-100 text-sm">
                <td className="max-w-[150px] pl-4 ">{product.title}</td>
                <td className="py-1 flex items-center justify-center">
                  {product.images.length > 0 ? (
                    <img
                      className="w-16 h-16 shadow-md rounded-md"
                      src={product.images[0].url}
                      alt={product.title}
                    />
                  ) : (
                    <div className="w-16 h-16 shadow-md rounded-md text-xs bg-gray-200 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                </td>

                <td className="px-3 py-1 whitespace-nowrap text-center capitalize">
                  {product.category.name}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-right">
                  {product.price.toLocaleString()}
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-center">
                  {product.sold}
                </td>
                <td className="px-2 py-1 whitespace-nowrap text-center">
                  {product.quantity}
                </td>
                <td className="px-4 py-1 whitespace-nowrap text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      to={`/admin/product/${product.id}`}
                      className="p-1 hover:scale-150 hover:transition-all hover:duration-100 "
                    >
                      <Pencil className="text-green-500 h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-1 hover:scale-150 hover:transition-all hover:duration-100"
                    >
                      <Trash2 className="text-red-500 h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ListProducts;
