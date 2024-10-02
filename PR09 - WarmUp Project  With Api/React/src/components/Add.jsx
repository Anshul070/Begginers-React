import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "../models/Axios";
import { ProductContext } from "../Context/Context";

const Add = () => {
  const [Products, setProducts] = useContext(ProductContext);
  const { register, handleSubmit, reset } = useForm();
  const [Category, setCategory] = useState("");
  function AddProduct(data) {
    axios
      .post("/add", {
        title: data.title,
        price: data.price,
        description: data.description,
        category: Category,
        image: data.image,
        rating: {
          rate: data.rate,
          count: data.count,
        },
      })
      .then(function (response) {
        console.log("data sent successfully");
        axios
          .get("/")
          .then((response) => response.data)
          .then((data) => setProducts(data));
      });
    const a = "1";
    console.log(a.length);
  }
  return (
    <div className="w-full  p-10 flex justify-center">
      <div className="w-3/4  mx-3 bg-zinc-200 rounded">
        <form
          onSubmit={handleSubmit((data) => {
            AddProduct(data);
            reset();
          })}
          className="flex flex-col p-5 gap-5">
          <div className="flex justify-between gap-5">
            <input
              {...register("title")}
              className="h-16 w-2/4 rounded outline-none p-5 text-sm"
              type="text"
              placeholder="title"
            />
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="h-16 w-2/4 rounded outline-none p-5 text-sm"
              placeholder="hello">
              <option value="electronics">Electronics</option>

              <option value="men's clothing">Men's clothing</option>

              <option value="women's clothing">Women's clothing</option>

              <option value="jewelery">Jewelery</option>
            </select>
          </div>
          <div className="flex justify-between gap-5">
            <input
              {...register("rate")}
              className="h-16 w-2/4 rounded outline-none p-5 text-sm"
              type="text"
              placeholder="rating"
            />
            <input
              {...register("count")}
              className="h-16 w-2/4 rounded outline-none p-5 text-sm"
              type="text"
              placeholder="count"
            />
          </div>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col justify-between w-1/2  gap-5 w-auto w-2/4">
              <input
                {...register("price")}
                className="h-16 w-full rounded outline-none p-5 text-sm"
                type="text"
                placeholder="price"
              />
              <input
                {...register("image")}
                className="h-16 w-full rounded outline-none p-5 text-sm"
                type="text"
                placeholder="image"
              />
            </div>
            <textarea
              {...register("description")}
              className="h-42 w-2/4 rounded outline-none p-5 text-sm"
              type="text"
              placeholder="description"
            />
          </div>
          <input
            className="bg-blue-500 mx-auto px-16 py-3 rounded"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default Add;
