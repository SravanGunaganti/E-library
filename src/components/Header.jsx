import { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/e-library.png";
import { FaBarsStaggered } from "react-icons/fa6";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);
  return (
    <header className="w-full fixed z-20 bg-black flex justify-center font-outfitbold border-gray-700">
      <nav className="flex flex-col md:flex-row text-gray-100 h-full w-full m-auto max-w-[1200px] justify-between shadow">
        <div className="text-3xl md:text-4xl font-self flex justify-between items-center p-4">
          <Link
            to="/"
            className={` hover:text-white transition flex items-center`}>
            <img
              src={logo}
              alt="e-library-logo"
              className="w-[120px] xs:w-[170px] contrast-50 invert-100"
            />
          </Link>
          <button
            className="md:hidden text-lg xs:text-2xl"
            onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <IoCloseCircle /> : <FaBarsStaggered />}
          </button>
        </div>
        <div className="md:bg-none hidden md:flex font-self text-md gap-3 lg:gap-6 pr-4 justify-center items-center mt-4 md:mt-0">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-gray-800 bg-gray-200"
                : "hover:text-white bg-gray-800 hover:bg-gray-700"
            } py-2 px-4 rounded-md transition`}>
            Home
          </Link>
          <Link
            to="/books"
            className={`${
              location.pathname === "/books"
                ? "text-gray-800 bg-gray-200"
                : "hover:text-white bg-gray-800 hover:bg-gray-700"
            } py-2 px-4 rounded-md transition`}>
            Browse Books
          </Link>
          <Link
            to="/add-book"
            className={`${
              location.pathname === "/add-book"
                ? "text-gray-800 bg-gray-200"
                : "hover:text-white bg-gray-800 hover:bg-gray-700"
            } py-2 px-4 rounded-md transition`}>
            Add Book
          </Link>
        </div>
        {
          <div
            className={`transition-transform duration-200 ${
              showMenu ? "translate-x-0" : "-translate-x-full"
            } p-4 flex bg-gray-900 w-screen md:hidden absolute flex-row top-[100%] font-self text-xs xs:text-sm gap-3 justify-center `}>
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-gray-800 bg-gray-200"
                  : "hover:text-white bg-gray-800 hover:bg-gray-700"
              } block w-fit py-2 px-4 rounded-md transition`}>
              Home
            </Link>
            <Link
              to="/books"
              className={`${
                location.pathname === "/books"
                  ? "text-gray-800 bg-gray-200"
                  : "hover:text-white bg-gray-800 hover:bg-gray-700"
              } py-2 px-4 rounded-md transition`}>
              Browse Books
            </Link>
            <Link
              to="/add-book"
              className={`${
                location.pathname === "/add-book"
                  ? "text-gray-800 bg-gray-200"
                  : "hover:text-white bg-gray-800 hover:bg-gray-700"
              } py-2 px-4 rounded-md transition`}>
              Add Book
            </Link>
          </div>
        }
      </nav>
    </header>
  );
}

export default Header;
