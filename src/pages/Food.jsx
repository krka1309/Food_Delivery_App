import { useState } from "react";
import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard";
function Food() {
  const [allProducts, setAllProducts] = useState(products);
  const [searchText, setSearchText] = useState("");
  const changeText = (e) => {
    setTimeout(() => {
      setSearchText(e.target.value);
    }, 3000);
  };
  return (
    <div className="py-32 flex flex-col" id="foods">
      <div className="bg-gray-500 h-48 text-white text-3xl font-semibold flex items-center justify-center">
        All Foods
      </div>
      <div className="mt-10  border-gray-400 border-2 max-w-md px-5 py-3 ml-20 md:ml-30 lg:ml-52 rounded-lg">
        <input
          type="search"
          name=""
          id=""
          placeholder="I'm looking for"
          className="outline-none"
          onChange={(e) => changeText(e)}
        />
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {allProducts.map((item) => (
            <div>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Food;
