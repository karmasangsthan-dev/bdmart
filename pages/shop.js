import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Slider } from "@mui/material";

import { useGetProductsQuery } from "../features/product/productApi";
import ProductCard from "../components/Product/ProductCard";
import ShopSideBar from "../components/Shop/ShopSideBar/ShopSideBar";

const shop = () => {
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();
  const [value, setValue] = useState([0, 150]);
  const brands = data?.data?.map((product) => product.brand);
  const category = data?.products?.map((product) => product.category);

  console.log({ data, isLoading, isSuccess, isError });
  return (
    <Layout title="Shop - Bangladesh Mart">
      <div className="px-lg-5 px-2 row mx-auto">
        <div className="col-lg-2 ">
          <ShopSideBar />
        </div>

        <div className="col-lg-10 pl-2">
          <div className="d-flex justify-content-between  m-2 fw-semibold fs-6">
            <span className="">Showing 4 of 4 Products</span>
            <span className="">Sort by:</span>
          </div>
          <div className="row row-cols-4">
            {data?.data?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default shop;
