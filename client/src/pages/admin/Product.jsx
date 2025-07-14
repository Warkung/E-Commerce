import { useState } from "react";
import FormCreateProduct from "../../components/admin/FormCreateProduct";
import ListProduct from "../../components/admin/ListProduct";

function Product() {
  // This state is used to trigger a refresh in ListCategory
  const [refresh, setRefresh] = useState(false);

  const handleCategoryCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <FormCreateProduct onCategoryCreated={handleCategoryCreated} />
      <hr />
      <div className="mt-4">
        <ListProduct refresh={refresh} />
      </div>
    </div>
  );
}
export default Product;
