import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

            <form action="#" className="py-4 md:py-0">
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
