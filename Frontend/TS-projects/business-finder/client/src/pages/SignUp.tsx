import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../utils/api.service";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    role: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleRoleToggle = (selectedRole: string) => {
    setFormData((prevData) => ({
      ...prevData,
      role: prevData.role === selectedRole ? "" : selectedRole,
    }));
  };

  // Handle input changes
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field.trim())) {
      setMessage({ type: "error", text: "All fields are required!" });
      return;
    }
    if (formData.password.length < 6) {
      setMessage({
        type: "error",
        text: "Password must be at least 6 characters long!",
      });
      return;
    }
    console.log(formData);

    const data = await signUp(formData);
    console.log(data);
    if (data.status === "success") {
      setMessage({
        type: "success",
        text: data.message,
      });
      navigate("/login");
    } else {
      setMessage({
        type: "error",
        text: data.error.message,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="w-full h-auto max-w-md bg-orange-100 shadow-lg rounded-lg p-8 m-1">
        <div className="text-center mb-6">
          <h1 className="text-black mt-4">
            Sign up so you can easily help improve our community.
          </h1>
        </div>
        {message.text && (
          <p
            className={`text-sm text-center mb-4 ${
              message.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="phone"
              type="number"
              placeholder="Mobile number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="firstName"
              type="text"
              placeholder="first name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="lastName"
              type="text"
              placeholder="last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Role Toggle Buttons */}
          <div className="flex justify-center mt-4 gap-4">
            <button
              type="button"
              onClick={() => handleRoleToggle("customer")}
              className={`w-32 h-10 ${
                formData.role === "customer"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-gray-300 rounded-lg flex items-center justify-center`}
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => handleRoleToggle("provider")}
              className={`w-32 h-10 ${
                formData.role === "provider"
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } hover:bg-gray-300 rounded-lg flex items-center justify-center`}
            >
              Provider
            </button>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Learn More
            </span>
          </p>
          <p className="text-xs text-gray-500 mb-4">
            By signing up, you agree to our{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Terms
            </span>
            ,{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Privacy Policy
            </span>
            , and{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Cookies Policy
            </span>
            .
          </p>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Sign up
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Have an account?{" "}
            <span
              className="text-indigo-500 hover:underline cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
