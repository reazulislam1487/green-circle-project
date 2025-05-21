import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();
  const { _id, name, price, quantity, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    // const updatedCoffee = {
    //   name: form.name.value,
    //   price: form.price.value,
    //   quantity: form.quantity.value,
    //   details: form.details.value,
    //   photo: form.photo.value,
    // };

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/"); // বা যেখানেই redirect করতে চাও
        }
      });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Update Coffee
      </h2>
      <form onSubmit={handleUpdateCoffee} className="space-y-4">
        <input
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Coffee Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="price"
          defaultValue={price}
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="quantity"
          defaultValue={quantity}
          placeholder="Quantity"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="photo"
          defaultValue={photo}
          placeholder="Photo URL"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="details"
          defaultValue={details}
          placeholder="Details"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 text-white"
        >
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
