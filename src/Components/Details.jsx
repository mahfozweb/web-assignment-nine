import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Details = ({ plant }) => {
  const handleForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    event.target.reset();
    toast("Successfully Submit");
  };
  const {
    plantName,
    category,
    price,
    rating,
    availableStock,
    careLevel,
    image,
    providerName,
    description,
  } = plant;
  return (
    <>
      <div className="flex justify-center bg-[#4B4B4B] items-center mt-10 md:mt-0 p-10">
        <div className="card  bg-base-100 w-[700px] shadow-sm">
          <h1 className=" pb-5 flex justify-center items-center">
            <span className="font-semibold ">Provider: </span>
            {providerName}
          </h1>
          <figure>
            <img
              className="w-[90%] md:h-[400px] object-fill"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex flex-col justify-between items-center">
              {plantName}
              <div className="badge badge-secondary">⭐⭐⭐{rating}</div>
            </h2>
            <div className="flex justify-between text-[15px] font-semibold">
              <span>Available: {availableStock}</span>
              <span>Care level: {careLevel}</span>
            </div>
            <p>{description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">
                <span className="font-semibold">Category:</span>
                {category}
              </div>
              <div className="badge badge-outline">
                <span className="font-semibold">Price:</span>
                {price}
              </div>
            </div>
            <button className="font-bold text-5xl">⬇</button>
          </div>
        </div>
      </div>
      {/* form */}
      <div className=" bg-[#4B4B4B] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body ">
              <h1 className="text-3xl font-bold">Book Consultation!</h1>
              <form onSubmit={handleForm}>
                <fieldset className="fieldset">
                  <label className="label">name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="name"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <button className="btn btn-neutral mt-4">Book Now</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Details;
