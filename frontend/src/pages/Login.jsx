import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { Navigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { token, error } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  if (token) return <Navigate to="/dashboard" />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Login</h2>
        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${{
                "border-red-500": errors.email,
                "border-gray-300": !errors.email,
              }}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field with Eye Button */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${{
                  "border-red-500": errors.password,
                  "border-gray-300": !errors.password,
                }}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 shadow-lg transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;