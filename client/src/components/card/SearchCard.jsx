import { useState, useEffect } from "react";
import useEcomStore from "../../store/ecomStore";

function SearchCard() {
  const {
    actionGetProducts,
    actionSearchFilters,
    actionGetCategories,
    categories,
  } = useEcomStore((state) => state);
  const [text, setText] = useState("");
  const [categorySelect, setCategorySelect] = useState([]);
  const [price, setPrice] = useState([]);

  // search by text
  useEffect(() => {
    const delay = setTimeout(() => {
      if (text) {
        actionSearchFilters({ query: text });
      } else {
        actionGetProducts();
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [text]);

  // search by category
  const handleCheckCategory = (e) => {
    const inCheck = e.target.value;
    const inState = [...categorySelect]; //[]
    const index = inState.indexOf(inCheck);
    if (index === -1) {
      inState.push(inCheck);
    } else {
      inState.splice(index, 1);
    }
    setCategorySelect(inState);
    if (inState.length > 0) {
      actionSearchFilters({ category: inState });
    } else {
      actionGetProducts();
    }
  };

  useEffect(() => {
    actionGetCategories();
  }, []);

  // search by price

  return (
    <div>
      {/* search bar */}
      <div>
        <h1 className="text-xl font-bold text-center">Search Products</h1>
        <input
          className="border rounded px-2 py-1"
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Search Products"
          id="search"
          value={text}
        />
      </div>

      {/* categories */}
      <div>
        <h1 className="mt-10 text-xl font-bold text-center">Categories</h1>
        {categories.map((category) => {
          return (
            <div key={category.id} className="flex gap-4 items-center">
              <input
                className="border rounded"
                type="checkbox"
                id={category.id}
                value={category.id}
                onChange={handleCheckCategory}
              />
              <label className="mr-2 capitalize" htmlFor={category.id}>
                {category.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default SearchCard;
