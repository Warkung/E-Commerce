function ShopPage() {
  return (
    <div className="flex h-screen ">
      {/* search Bar */}
      <div className="w-1/4 bg-gray-200 p-4 ">Search Bar</div>
      {/* product list */}
      <div className="w-3/4 bg p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
      </div>
      {/* cart */}
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">Cart</div>
    </div>
  );
}
export default ShopPage;
