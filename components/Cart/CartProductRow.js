import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartProductQuantity,
  decCartProductQuantity,
  incCartProductQuantity,
  removeCartProduct,
} from "../../features/auth/authSlice";
import Image from "next/image";

export default function CartProductRow({ item }) {
  const dispatch = useDispatch();
  const { product, quantity } = item || {};

  return (
    <tr key={product?._id}>
      <td>
        <div style={{ width: "50px", height: "auto" }}>
          <Image
            layout="responsive"
            width={100}
            height={100}
            src={product?.thumbnail}
            className=" "
            alt=""
          />
        </div>
      </td>
      <td>
        <h6 className="text-capitalize">{product?.title}</h6>
      </td>
      <td>{(product?.price - product?.discountPercentage).toFixed(2)} $</td>
      <td>
        <button
          onClick={() => dispatch(decCartProductQuantity(item))}
          style={{ padding: "0 3px", border: "none" }}
          className=""
        >
          -
        </button>
        <input
          style={{ width: "25px" }}
          className="text-center border-0"
          type="text"
          value={quantity}
        />
        <button
          onClick={() => dispatch(incCartProductQuantity(item))}
          style={{ padding: "0 3px", border: "none" }}
        >
          +
        </button>
      </td>
      <td>
        ${" "}
        {(quantity * (product?.price - product?.discountPercentage)).toFixed(2)}
      </td>
      <td>
        <button
          onClick={() => dispatch(removeCartProduct(item))}
          style={{ padding: "0 5px" }}
          className="text-danger border-0"
        >
          X
        </button>
      </td>
    </tr>
  );
}
