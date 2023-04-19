import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useAddToCartMutation } from "../../features/auth/authApi";
import { addToCart } from "../../features/auth/authSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [token, setToken] = useState();
  const { user } = useSelector((state) => state?.auth);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setToken(accessToken);
  }, []);
  const [addProductToCart, { isLoading, isSuccess, isError, error }] =
    useAddToCartMutation();

  const handleAddToCart = (product) => {
    if (!user?.email || !token) {
      return toast.error("please login First", { id: "addToCart" });
    }

    if (user?.email && token) {
      const userId = user?._id;
      const productId = product?._id;
      if (user?.cart?.find((pro) => pro?._id === product?._id)) {
        return toast.error("Product already added", { id: "addToCart" });
      }
      addProductToCart({ token, userId, productId });
      dispatch(addToCart(product));
    }
  };
  console.log({ isLoading, isSuccess, isError, error });
  return (
    <section className=" my-2">
      <div className="product  py-1">
        <div className="px-3">
          <picture className="mx-auto">
            <Image
              src={product.thumbnail}
              layout="responsive"
              width={100}
              height={100}
            />
          </picture>
          <div className="main-detail " style={{ height: "45px" }}>
            <p className=" fs-6 text-capitalize">{product.title}</p>
          </div>
          <del className="  fs-6 text-warning">{product.price}.00$</del>
          <div className="old-price">
            <p className="fs-6">
              {(product.price - product.discountPercentage).toFixed(2)} $
            </p>
          </div>
        </div>
        {/* <div className="save-price">{  product.savedPrice}.00$</div> */}
        <div className="d-flex justify-content-center w-full mx-auto">
          <button
            className="cart-btn w-full mx-2 px-2 rounded"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
          <button className="cart-btn w-full mx-2 px-2 rounded">
            {" "}
            Details
          </button>
        </div>
      </div>
    </section>
  );
}
