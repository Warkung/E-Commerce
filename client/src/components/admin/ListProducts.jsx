import { useEffect } from "react";
import useEcomStore from "../../store/ecomStore";

function ListProducts() {
  const { products, actionGetProducts } = useEcomStore((state) => state);

  useEffect(() => {
    actionGetProducts();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-center leading-4 font-medium  uppercase tracking-wider">
              Product name
            </th>
            <th className="px-3 py-3 bg-gray-50 text-left leading-4 font-medium  uppercase tracking-wider">
              Category
            </th>
            <th className="px-4 py-3 bg-gray-50 text-center leading-4 font-medium  uppercase tracking-wider">
              Price
            </th>
            <th className="px-2 py-3 bg-gray-50 text-center leading-4 font-medium  uppercase tracking-wider">
              Sold
            </th>
            <th className="px-2 py-3 bg-gray-50 text-center leading-4 font-medium  uppercase tracking-wider">
              Quantity
            </th>
            <th className=" py-3 bg-gray-50 text-center leading-4 font-medium  uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => {
            return (
              <tr key={product.id} className="hover:bg-gray-100 text-sm">
                <td className="px-6 py-1 whitespace-nowrap">{product.title}</td>
                <td className="px-3 py-1 whitespace-nowrap text-left">
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
                <td className="text-center  py-1 whitespace-nowrap font-bold">
                  <button className="mx-1 p-1  w-18 rounded-2xl bg-blue-500 text-blue-200">
                    Edit
                  </button>
                  <button className="mx-1 p-1  w-18 rounded-2xl bg-red-400 text-red-900">
                    Delete
                  </button>
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
