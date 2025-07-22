import { useState } from "react";
import useEcomStore from "../../store/ecomStore";
import { useEffect } from "react";

function SearchCard() {
  const { product, actionGetProducts,actionSearchFilters } = useEcomStore((state) => state);
  const [text, setText] = useState("");
  console.log(text);

  // search by text

  // search by category

  // search by price

//   useEffect(() => {
//     actionGetProducts();
//   }, [text]);

  return (
    <div>
      <h1>Search</h1>
      <input
        className="border rounded px-2 py-1"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
export default SearchCard;
