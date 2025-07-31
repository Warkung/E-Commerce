import { useEffect } from "react";
import { removeCategory } from "../../api/category";
import useEcomStore from "../../store/ecomStore";
import { toast } from "react-toastify";

function ListCategory({ refresh }) {
  const { token, categories, actionGetCategories } = useEcomStore(
    (state) => state
  );
  const handleRemove = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this category?")) {
        await removeCategory(token, id);
        toast.success("Category removed successfully");
        actionGetCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token) return;
    actionGetCategories();
  }, [refresh, token]);

  return (
    <>
      <style>{listStyles}</style>
      <div className="category-list-container">
        <div className="category-header">
          <h1>Categories List</h1>
        </div>
        <table className="category-table">
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id} className="category-item capitalize">
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                  <div className="category-actions">
                    <button
                      onClick={() => handleRemove(category.id)}
                      className="btn-action btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ListCategory;

const listStyles = `
    .category-list-container {
      max-width: 350px;
      margin-top:1rem ;
      padding: 1rem;
      background-color: #f9f9f9;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    .category-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      border-bottom: 2px solid #e0e0e0;
      padding-bottom: 0.75rem;
    }
    .category-header h1 {
      margin: 0;
      color: #2c3e50;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
    }
    .category-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    .category-table th, .category-table td {
      padding: 0.5rem 0.8rem;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;      
    }
    .category-table th {
      background-color: #f2f2f2;
      font-weight: 600;
      color: #34495e;    
    }
    .category-table tr:hover {
      background-color: #f5f5f5;
    }
    .category-table td {
      font-size: 0.9rem;
      font-weight: 500;
      color: #34495e;
    }
    .category-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
    }
    .btn-action {
      padding: 0.3rem 0.6rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      font-size: 0.8rem;
      transition: all 0.2s ease;
      color: white;
    }   
    .btn-delete {
      background-color: #e74c3c;
    }
    .btn-delete:hover {
      background-color: #c0392b;
      transform: translateY(-1px);
    }

    /* Responsive Styles for Smartphones */
    @media (max-width: 600px) {
      .category-list-container {
        margin: 1rem;
        padding: 1.5rem 1rem;
      }

      .category-list-container h1 {
        font-size: 1.75rem;
      }

      .category-table th, .category-table td {
        padding: 0.6rem;
        font-size: 0.9rem;
      }   

      .category-actions {
        justify-content: flex-end;
      }
    }
  `;
