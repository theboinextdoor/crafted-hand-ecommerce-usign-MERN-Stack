import { Link } from "react-router-dom"
import logo from "../assets/mylogo.png"
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenuButton = () => {
    setShowMenu((prev) => !prev)
  }
  return (
    <header className="fixed shadow-lg w-full h-16 px-2 md:px-4 z-50 bg-white">

      <div className="flex items-center h-full justify-between">
        {/* Company Icon  */}
        <Link to="/">
          <div className="h-16 sm:w-10 md:w-32 ">
            <img src={logo} alt="company-logo" className="h-full " />
          </div>
        </Link>

        {/* Nav bars */}
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={"/"} className="hover:text-indigo-700 text-black">  Home
            </Link>
            <Link to={"/products"} className="hover:text-indigo-700 text-black">
              Products
            </Link>
            <Link to={"/about"} className="hover:text-indigo-700 text-black">
              About
            </Link>
          </nav>
        </div>

        {/* Hamburger */}
        <div className="md:hidden text-xl">
          {
            showMenu ? (
              <>
                < RxCross1 onClick={handleShowMenuButton} />
                <nav className="absolute top-16 right-0 left-0 h-[150px] backdrop-blur-xl ">
                  <div className="mt-2 flex flex-col w-ful justify-between items-center gap-4">
                    <Link to={"/"} className="hover:text-indigo-700 text-black">  Home
                    </Link>

                    <Link to={"/products"} className="hover:text-indigo-700 text-black">
                      Products
                    </Link>

                    <Link to={"/about"} className="hover:text-indigo-700 text-black">
                      About
                    </Link>
                  </div>
                </nav>
              </>
            ) : <RxHamburgerMenu onClick={handleShowMenuButton} />
          }
        </div>


        {/* Cart and Login */}
        <div className="text-xl flex justify-between items-center gap-6 mx-6">
          <div className=" md:text-2xl text-black cursor-pointer active:text-slate-400 relative">
            <Link to="/cart">
              <FaShoppingCart className="text-2xl active:text-blue-500" />
              <div className="text-white bg-red-600 absolute -top-1 -right-1 rounded-full m-0 p-0  text-sm text-center h-4 w-4 ">
                0
              </div>
            </Link>
          </div>

          <div>
            <Link to={"/login"}>
              <RiAccountCircleFill className="text-2xl active:text-blue-500" />
            </Link>
          </div>
        </div>


      </div>
    </header>
  )
}

export default Header