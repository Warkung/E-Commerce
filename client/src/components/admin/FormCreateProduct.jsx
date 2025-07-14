import { useEffect, useState } from "react";
import useEcomStore from "../../store/ecomStore";
import { toast } from "react-toastify";
import { createProduct } from "../../api/product";

const initState = {
  title: "",
  description: "",
  price: "",
  quantity: "",
  categoryId: "",
  images: [],
};

function FormCreateProduct({ onCategoryCreated }) {
  const { token, categories, actionGetCategories } = useEcomStore(
    (state) => state
  );
  const [form, setForm] = useState(initState);
  // const [files, setFiles] = useState([]);

  // Toggle form visibility
  const [showcreateform, setShowCreateForm] = useState(false);
  const toggleCreateForm = () => {
    setShowCreateForm(!showcreateform);
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createProduct(token, form);
      toast.success(res.data.title + " created successfully");
      setForm(initState);
      toggleCreateForm();
      onCategoryCreated();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  // const handleFileChange = (e) => {
  //   setFiles(e.target.files);
  // };

  useEffect(() => {
    if (token) {
      actionGetCategories(token);
    }
  }, [token, actionGetCategories]);

  return (
    <>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div
            onClick={toggleCreateForm}
            className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
          ></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-900">
            Create Product
          </span>
        </label>
      </div>
      <style>{formStyles}</style>
      {showcreateform && (
        <div className="form-container">
          <h2 className="form-title">Create New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter product title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter product description"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="categoryId">Category</label>
              <select
                id="categoryId"
                name="categoryId"
                value={form.categoryId}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    className=" capitalize"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* <div className="form-group">
            <label htmlFor="images">Images</label>
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleFileChange}
              multiple
              accept="image/*"
            />
          </div> */}

            <button type="submit" className="submit-button">
              Create Product
            </button>
          </form>
        </div>
      )}
    </>
  );
}
export default FormCreateProduct;

const formStyles = `
    .form-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
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
      margin-bottom: 1.5rem;
    }
    .form-row {
      display: flex;
      gap: 1rem;
    }
    .form-row .form-group {
      flex: 1;
    }
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #374151;
      font-size: 1rem;
    }
    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      box-sizing: border-box;
      transition: border-color 0.2s, box-shadow 0.2s;
      font-size: 1rem;
    }
    .form-group input[type="file"] {
      padding: 0.5rem;
    }
    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
    .submit-button {
      width: 100%;
      padding: 0.8rem;
      border: none;
      border-radius: 6px;
      background-color: #3b82f6;
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s;
      margin-top: 1rem;
    }
    .submit-button:hover {
      background-color: #2563eb;
      transform: translateY(-1px);
    }
  `;
