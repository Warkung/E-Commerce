import { useState } from "react";
import FormCategory from "../../components/admin/FormCategory";
import ListCategory from "../../components/admin/ListCategory";

function Category() {
  // This state is used to trigger a refresh in ListCategory
  const [refresh, setRefresh] = useState(false);

  const handleCategoryCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <FormCategory onCategoryCreated={handleCategoryCreated} />
      <ListCategory refresh={refresh} />
    </div>
  );
}
export default Category;