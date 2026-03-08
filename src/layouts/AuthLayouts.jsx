import { Outlet } from "react-router";
import SocialLogin from "../pages/auth/SocialLogin";
import Logo from "../components/Logo";
import AuthImg from "../assets/auth.svg";

const AuthLayouts = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-(--body-bg) p-4 sm:p-8 transition-colors duration-300">
        <div className="w-full max-w-6xl bg-base-100 shadow-2xl rounded-xl overflow-hidden border border-base-content/5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 lg:p-16 flex flex-col justify-center text-base-content">
              <div className="mb-8">
                <Logo />
              </div>

              <Outlet />

              <div className="mt-3">
                <SocialLogin />
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center bg-base-200/50 dark:bg-neutral/10 transition-colors duration-300">
              <div className="p-8">
                <img
                  src={AuthImg}
                  alt="AuthImg"
                  className="max-w-md opacity-90 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
