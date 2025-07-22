import { useState, useEffect } from "react";
import useEcomStore from "../../store/ecomStore";

function SearchCard() {
  const { actionGetProducts, actionSearchFilters } = useEcomStore(
    (state) => state
  );
  const [text, setText] = useState("");

  // search by text
  useEffect(() => {
    const delay = setTimeout(() => {
      actionSearchFilters({ query: text });
      if (text === "") actionGetProducts();
    }, 500);
    return () => clearTimeout(delay);
  }, [text]);
  // search by category

  // search by price

  return (
    <div>
      <h1>Search</h1>
      <input
        className="border rounded px-2 py-1"
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Products"
      />
    </div>
  );
}
export default SearchCard;
