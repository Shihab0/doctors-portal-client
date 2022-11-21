import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../Shared/Loader/Loader";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    console.log(data);
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h2 className="text-3xl">Add Doctor</h2>
      <div className="w-96 p-7">
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register("specialties")}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Pick a Specialty
              </option>
              {specialties.map((specialty) => (
                <option value={specialty.name} key={specialty._id}>
                  {specialty.name}
                </option>
              ))}
            </select>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                type="file"
                {...register("img", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <input
            className="btn btn-accent mt-4 w-full"
            value="Add Doctor"
            type="submit"
          />
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
