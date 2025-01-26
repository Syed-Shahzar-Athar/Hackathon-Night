import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { postData } from "../utils/axios";

const Receptionist = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const generateToken = () => Math.floor(100000 + Math.random() * 900000);

    console.log("Form Data: ", data);
    const { cnic, name, contact, address, purpose } = data;
    postData("receptionist/register", {
      cnic: cnic,
      name: name,
      contactDetails: contact,
      address: address,
      purpose: purpose,
      token: generateToken(),
    })
      .then((data) => console.log("User Registered:", data))
      .catch((err) => console.error(err));
    console.log(generateToken());
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-lg p-10 max-w-lg w-full">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">RECEPTIONIST</h2>
        <h3 className="text-2xl font-semibold text-center text-gray-600 mb-6">Register User</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* CNIC Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              CNIC
            </label>
            <input
              type="text"
              {...register("cnic", {
                required: "CNIC is required",
                pattern: {
                  value: /^\d{5}-\d{7}-\d{1}$/,
                  message: "CNIC must be in the format 12345-1234567-1",
                },
              })}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition ${
                errors.cnic ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.cnic && (
              <p className="text-red-500 text-sm mt-2">{errors.cnic.message}</p>
            )}
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>

          {/* Contact Details Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Contact Details
            </label>
            <input
              type="text"
              {...register("contact", {
                required: "Contact details are required",
                pattern: {
                  value: /^\d{10,15}$/,
                  message: "Contact must be a valid phone number",
                },
              })}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition ${
                errors.contact ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-2">{errors.contact.message}</p>
            )}
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Address
            </label>
            <textarea
              {...register("address", { required: "Address is required" })}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm mt-2">{errors.address.message}</p>
            )}
          </div>

          {/* Purpose Field */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-2">
              Purpose
            </label>
            <select
              {...register("purpose", { required: "Purpose is required" })}
              className={`w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition ${
                errors.purpose ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Purpose</option>
              <option value="Rasan">Rasan</option>
              <option value="Bijli">Bijli</option>
              <option value="Pani">Pani</option>
              <option value="Education">Education</option>
              <option value="Medical">Medical</option>
            </select>
            {errors.purpose && (
              <p className="text-red-500 text-sm mt-2">{errors.purpose.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Receptionist;
