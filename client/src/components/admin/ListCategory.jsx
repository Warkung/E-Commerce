import { useEffect, useState } from "react";
import { litsCategory, removeCategory } from "../../api/category";
import useEcomStore from "../../store/ecomStore";
import { toast } from "react-toastify";

function ListCategory() {
  const token = useEcomStore((state) => state.token);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const { data } = await litsCategory(token);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeCategory(token, id);
      toast.success("Category removed successfully");
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories]);

  return (
    <>
      <style>{listStyles}</style>
      <div className="category-list-container">
        <h1>Categories</h1>
        <table className="category-table">
         
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="category-item capitalize">
                <td>{category.name}</td>
                <td style={{ textAlign: 'right' }}>
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
      max-width: 450px;
      margin: 1.5rem auto;
      padding: 1.5rem;
      background-color: #f9f9f9;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    .category-list-container h1 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #2c3e50;
      font-weight: 700;
      border-bottom: 2px solid #e0e0e0;
      padding-bottom: 1rem;
      font-family: 'Montserrat', sans-serif;
      font-size: 20px;
    }
    .category-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    .category-table th, .category-table td {
      padding: 0.8rem 1.2rem;
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
      font-size: 1rem;
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
