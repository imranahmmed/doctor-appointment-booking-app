import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          role: result.role,
          token: result.token,
        },
      });

      console.log(result, "login data");
      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {/* <section className="bg-[#0066ff15]">
        <div className="container text-center">
          <h2 className="heading">Login</h2>
        </div>
      </section> */}

      <section>
        <div className="container">
          <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-5">
            <h3 className="text-headingColor text-[26px] leading-9 font-bold mb-0">
              Hello! <span className="text-primaryColor">Welcome</span> Back!
            </h3>
            <p className="text_para text-textColor text-[16px] leading-7 font-medium mb-5 mt-0">
              Please Sign In to your account.
            </p>

            <form action="#" onSubmit={submitHandler} className="py-4 md:py-0">
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleLoginFormChange}
                  className="w-full px-4 py-3 border border-solid border-[#0066ff34] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleLoginFormChange}
                  className="w-full px-4 py-3 border border-solid border-[#0066ff34] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                  required
                />
              </div>

              <button type="submit" className="btn w-full rounded-md mt-3 py-3">
                Login
              </button>

              <p className="mt-5 text-textColor">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primaryColor font-medium ml-1"
                >
                  Register
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
