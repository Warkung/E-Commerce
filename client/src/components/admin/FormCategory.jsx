import { useState } from "react";
import { createCategory } from "../../api/category";
import useEcomStore from "../../store/ecomStore";
import axios from "axios";
import { toast } from "react-toastify";

function FormCategory() {
  const token = useEcomStore((state) => state.token);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory(token, { name });
      toast.success("Category created successfully");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <>
      <style>{formStyles}</style>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Create Category</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
export default FormCategory;

const formStyles = `
    .form-container {
      max-width: 500px;
      margin:auto;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      background-color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    .form-title {
      text-align: center;
      font-size: 1.75rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 2rem;
    }
    .form-group {
      margin-bottom: .5rem;
    }
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #374151;
      font-size: 1rem;
    }
    .form-group input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      box-sizing: border-box;
      transition: border-color 0.2s, box-shadow 0.2s;
      font-size: 1rem;
    }
    .form-group input:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
    .submit-button {
      width: 40%;
      padding: 0.5rem;
      border: none;
      border-radius: 6px;
      background-color: #3b82f6;
      color: white;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s;
    }
    .submit-button:hover {
      background-color: #2563eb;
      transform: translateY(-1px);
    }
     
  `;
