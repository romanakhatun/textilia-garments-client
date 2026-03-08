/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { HiOutlineBars3 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import useAuth from "../hooks/useAuth";
import NavItem from "./NavItem";
import Logo from "./Logo";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const drawerId = "mobile-menu-drawer";
  const { user, signOutUser } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinksPublic = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/all-products" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinksPrivate = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/all-products" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSignOut = () => {
    signOutUser().catch(console.log);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 text-base-content border-b border-base-content/10 ${
          isScrolled
            ? "shadow-sm bg-base-100/90 backdrop-blur-md py-0"
            : "bg-(--body-bg) py-1 md:py-2"
        }`}
      >
        <div className="drawer">
          <input id={drawerId} type="checkbox" className="drawer-toggle" />

          <div className="drawer-content px-4 md:px-8 lg:px-12">
            <div className="navbar min-h-16 md:min-h-[72px]">
              <div className="navbar-start flex items-center gap-3">
                <label
                  htmlFor={drawerId}
                  className="lg:hidden cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <HiOutlineBars3 size={28} />
                </label>
                <Logo />
              </div>

              <div className="navbar-center hidden lg:flex text-base-content">
                <ul className="menu-horizontal gap-8 font-medium text-sm tracking-wide">
                  {(user ? navLinksPrivate : navLinksPublic).map((link) => (
                    <NavItem key={link.path} to={link.path} drawerId={drawerId}>
                      {link.name}
                    </NavItem>
                  ))}
                </ul>
              </div>

              <div className="navbar-end flex items-center gap-3 md:gap-5">
                <ThemeToggle />

                {!user ? (
                  <div className="flex items-center gap-2">
                    <Link
                      to="/login"
                      className="hidden md:flex text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors px-4 text-base-content"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="bg-primary text-primary-content px-5 md:px-7 py-2.5 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] hover:opacity-90 transition-all shadow-sm active:scale-95"
                    >
                      {/* bg-[#2D2D2D] bad diye bg-primary kora hoyeche jate light/dark e auto change hoy */}
                      Register
                    </Link>
                  </div>
                ) : (
                  <UserDropdown handleSignOut={handleSignOut} user={user} />
                )}
              </div>
            </div>
          </div>

          {/* MOBILE DRAWER */}
          <div className="drawer-side z-[60]">
            <label
              htmlFor={drawerId}
              className="drawer-overlay bg-black/30 backdrop-blur-sm"
            ></label>

            <ul className="p-8 w-[80%] max-w-sm min-h-full bg-base-100 text-base-content space-y-6">
              {/* bg-white bad diye bg-base-100 kora hoyeche */}
              <div className="flex justify-between items-center mb-8">
                <Logo />
                <label htmlFor={drawerId}>
                  <TfiClose
                    size={20}
                    className="cursor-pointer hover:rotate-90 transition-transform duration-300"
                  />
                </label>
              </div>

              <div className="flex flex-col gap-4">
                {(user ? navLinksPrivate : navLinksPublic).map((link) => (
                  <NavItem
                    key={`mobile-${link.name}`}
                    to={link.path}
                    drawerId={drawerId}
                  >
                    <span className="text-lg font-medium">{link.name}</span>
                  </NavItem>
                ))}
              </div>

              {!user ? (
                <div className="pt-10 border-t border-base-content/10">
                  <Link
                    to="/register"
                    onClick={() =>
                      (document.getElementById(drawerId).checked = false)
                    }
                    className="block w-full bg-primary text-primary-content text-center py-4 text-xs font-bold uppercase tracking-widest shadow-lg"
                  >
                    Get Started Now
                  </Link>
                  <p className="text-center mt-4 text-xs opacity-60">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-bold underline text-base-content"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              ) : (
                <button
                  onClick={handleSignOut}
                  className="w-full mt-10 border border-error/20 text-error py-4 text-xs font-bold uppercase tracking-widest hover:bg-error/5 transition-colors"
                >
                  Logout Account
                </button>
              )}
            </ul>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
