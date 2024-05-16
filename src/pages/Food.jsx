import { useEffect, useState } from "react";
import products from "../assets/fake-data/products.js";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../store/FilterProducts/filterSlice.js";
import { TextField, Box } from "@mui/material";
function Food() {
  const [allProducts, setAllProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const changeText = (e) => {
    setSearchText(e.target.value);
    dispatch(filterActions.filterProducts(e.target.value));
  };
  const selector = useSelector((state) => state.search.searchText);
  useEffect(() => {
    if (selector.length === 0) {
      setAllProducts(products);
    } else {
      setAllProducts(
        products.filter((item) => item.title.toLowerCase().includes(selector))
      );
    }
  }, [selector, products]);
  // setSearchText(selector);
  console.log(selector);
  return (
    <div className="py-32 flex flex-col" id="foods">
      <div className="bg-gray-500 h-48 text-white text-3xl font-semibold flex items-center justify-center">
        All Foods
      </div>
      <div className="border-tahiti mt-10 px-5 py-3 ml-20 md:ml-30 lg:ml-50 rounded-2xl ">
        <Box width={350} height={20}>
          <TextField
            fullWidth
            color="secondary"
            type="search"
            variant="outlined"
            placeholder="I'm looking for"
            className="outline-none"
            value={searchText}
            onChange={(e) => changeText(e)}
            focused
            InputProps={{
              style: {
                borderRadius: "10px",
              },
            }}
          />
        </Box>
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
