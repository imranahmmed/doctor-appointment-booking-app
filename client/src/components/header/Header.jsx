import React, { useEffect, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/doctors",
    name: "Find a Doctor",
  },
  {
    path: "/clinics",
    name: "Nearby Clinic",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*==============Logo============== */}
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          {/*==============Menu============== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center justify-between gap-5">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[18px] leading-7 font-600"
                        : "text-textColor text-[18px] leading-7 font-500 hover:text-primaryColor"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/*==============Action============== */}

          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor" ? `/doctors/profile/me` : role === "clinic" ? `/clinics/profile/me` : `/users/profile/me`
                  }`}
                  className="flex gap-3 items-center"
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      src={user?.photo}
                      alt="User Avatar"
                      className="w-full rounded-full"
                    />
                  </figure>
                  <div>
                    <h2 className="text-bold text-lg text-headingColor">{user?.clinicName}</h2>
                    <p className="para capitalize text-normal text-sm text-gray-500">
                      {role}
                    </p>
                  </div>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] border border-primaryColor hover:bg-transparent hover:text-primaryColor transition-all duration-300">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
