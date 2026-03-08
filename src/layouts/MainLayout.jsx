import { Outlet } from "react-router";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import BackToTopButton from "../components/BackToTopButton";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pb-10 md:pb-20">
        <Navbar />
      </div>
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />

      <BackToTopButton />
    </div>
  );
};

export default MainLayout;
