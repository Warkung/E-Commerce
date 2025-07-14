import { use, useEffect } from "react";
import useEcomStore from "../../store/ecomStore";
import { removeProduct } from "../../api/product";
import { toast } from "react-toastify";

function ListProduct({ refresh }) {
  const { token, products, actionGetProducts } = useEcomStore((state) => state);

  const handleRemoveProduct = async (productId) => {
    try {
      const { data } = await removeProduct(token, productId);
      toast.success(data);
      actionGetProducts();
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const handleUpdateProduct = async (productId) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    actionGetProducts();
  }, [actionGetProducts, refresh]);

  return (
    <div className="table-container">
      <style>{tableStyles}</style>
     
      <table className="product-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td className="capitalize">{product.category.name}</td>
                <td>${product.price}</td>
                <td>{product.sold}</td>
                <td>{product.quantity}</td>
                <td>
                  <button className="edit-button">Edit</button>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "1rem" }}>
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default ListProduct;

const tableStyles = `
    .table-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 2rem;
      border: 1px solid #ddd;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      background-color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      overflow-x: auto;
    }
    .table-title {
      text-align: center;
      font-size: 1.75rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 2rem;
    }
    .product-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.9rem;
    }
    .product-table th,
    .product-table td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #e5e7eb;
      white-space: nowrap;
    }
    .product-table thead {
      background-color: #f9fafb;
    }
    .product-table th {
      font-weight: 600;
      color: #374151;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .product-table tbody tr:nth-child(even) {
      background-color: #f9fafb;
    }
    .product-table tbody tr:hover {
      background-color: #f3f4f6;
    }
    .product-table td {
      color: #4b5563;
    }
    .product-table .capitalize {
        text-transform: capitalize;
    }
    .product-table td button {
      padding: 0.3rem 0.6rem;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      font-size: 0.875rem;
      margin-right: 0.5rem;
      transition: background-color 0.2s, transform 0.1s;
    }
    .product-table td button:hover {
        transform: translateY(-1px);
    }
    .edit-button {
      background-color: #3b82f6;
    }
    .edit-button:hover {
      background-color: #2563eb;
    }
    .delete-button {
      background-color: #ef4444;
    }
    .delete-button:hover {
      background-color: #dc2626;
    }
`;
