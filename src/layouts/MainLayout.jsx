import { Outlet } from "react-router";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import BackToTopButton from "../components/BackToTopButton";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="pb-28">
        <Navbar />
      </div>
      <main className="min-h-screen">
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
