import React, { useContext, useState , useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "../models/Axios";
import { ProductContext } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [Products, setProducts] = useContext(ProductContext);
  const { register, handleSubmit, reset } = useForm();
  const [Category, setCategory] = useState("");
  const Id = Number(useParams().id);
  const [EditedProduct, setEditedProduct] = useState(Products.filter(p => p.id === Id)[0]);
  const navigate = useNavigate();
  console.log(EditedProduct)


  function EditProduct(data) {
    axios
      .put(`/edit/${Id}`, {
        title: data.title==="" ? EditedProduct.title : data.title,
        price: data.price==="" ? EditedProduct.price : data.price,
        description: data.description==="" ? EditedProduct.description : data.description,
        category: data.category=== EditedProduct.category ? EditedProduct.category : data.category,
        image: data.image==="" ? EditedProduct.image : data.image,
        rating: {
          rate: data.rate==="" ? EditedProduct.rate : data.rate,
          count: data.count==="" ? EditedProduct.count : data.count,
        },
      })
      .then(function (response) {
        console.log("Product Edited successfully");
        axios
          .get("/")
          .then((response) => response.data)
          .then((data) => setProducts(data));
      });
  }
  return (
    <div className="w-full  p-10 flex justify-center">
      <div className="w-3/4  mx-3 bg-zinc-200 rounded">
        <form
          onSubmit={handleSubmit((data) => {
            
            EditProduct(data);
            reset();
            navigate(-1)
          })}
          className="flex flex-col p-5 gap-5">
          <div className="flex justify-between gap-5">
            <input 
              {...register("title")}
              className="h-16 w-2/4 rounded outline-none p-5 text-sm"
              type="text"
              placeholder={EditedProduct.title}
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
              placeholder={EditedProduct.rating.rate}
            />
            <input
              {...register("count")}
              className="h-16 w-2/4 rounded outline-none p-5 text-sm"
              type="text"
              placeholder={EditedProduct.rating.count}
            />
          </div>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col justify-between w-1/2  gap-5 w-auto w-2/4">
              <input
                {...register("price")}
                className="h-16 w-full rounded outline-none p-5 text-sm"
                type="text"
                placeholder={EditedProduct.price}
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
              placeholder={EditedProduct.description}
            />
          </div>
          <input
            className="bg-blue-500 mx-auto px-16 py-3 rounded"
            type="submit"
            value="Edit"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
