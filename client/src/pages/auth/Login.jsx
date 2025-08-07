import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useEcomStore from "../../store/ecomStore";
import { Eye, EyeClosed, EyeOff } from "lucide-react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { user, token, actionLogin } = useEcomStore((state) => state);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await actionLogin(form);
      const role = res.data.payload.role;
      if (role === "admin") {
        navigate(-1);
        toast.success("Admin login successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
      } else {
        navigate(-1);
        toast.success("Wellcome back!", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(
        error.response.data.message || "Login failed. Please try again.,",
        {
          position: "bottom-right",
          autoClose: 2000,
        }
      );
    }
  };

  return (
    <div>
      <section className="">
        <div className="flex flex-col items-center px-6 py-8 mx-auto h-full">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.email}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      onChange={handleChange}
                      value={form.password}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                    >
                      {showPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeClosed size={20} />
                      )}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
