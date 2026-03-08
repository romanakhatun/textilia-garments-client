import { NavLink, Outlet } from "react-router";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  ClipboardList,
  PlusSquare,
  PackageSearch,
  Clock,
  CheckCircle2,
  UserCircle,
  LogOut,
  Menu,
} from "lucide-react";

import useAuth from "../hooks/useAuth";
import Logo from "../components/Logo";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const { signOutUser } = useAuth();
  const { role } = useRole();

  const adminMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { name: "Manage Users", path: "manage-users", icon: <Users size={20} /> },
    {
      name: "All Products",
      path: "all-products",
      icon: <ShoppingBag size={20} />,
    },
    {
      name: "All Orders",
      path: "all-orders",
      icon: <ClipboardList size={20} />,
    },
  ];

  const managerMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Add Product",
      path: "add-product",
      icon: <PlusSquare size={20} />,
    },
    {
      name: "Manage Products",
      path: "manage-products",
      icon: <PackageSearch size={20} />,
    },
    {
      name: "Pending Orders",
      path: "pending-orders",
      icon: <Clock size={20} />,
    },
    {
      name: "Approved Orders",
      path: "approved-orders",
      icon: <CheckCircle2 size={20} />,
    },
    {
      name: "Manager Profile",
      path: "profile",
      icon: <UserCircle size={20} />,
    },
  ];

  const buyerMenu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { name: "My Orders", path: "my-orders", icon: <ClipboardList size={20} /> },
    { name: "Buyer Profile", path: "profile", icon: <UserCircle size={20} /> },
  ];

  const menu =
    role === "admin" ? adminMenu : role === "manager" ? managerMenu : buyerMenu;

  return (
    <div className="font-nunito min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <div className="drawer md:drawer-open lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col min-h-screen">
          {/* --- Navbar --- */}
          <nav className="navbar w-full bg-base-100 border-b border-base-content/10 px-6 py-3 sticky top-0 z-20 shadow-sm">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="cursor-pointer md:hidden p-2 hover:bg-base-200 rounded-lg transition-all"
            >
              <Menu size={22} />
            </label>
            <div className="flex-1">
              <Logo logoColor="text-base-content" />
            </div>

            <div className="flex items-center gap-2 px-4 py-1 bg-accent/20 border border-accent/30 rounded-full">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary italic">
                {role} Portal
              </span>
            </div>
          </nav>

          <main className="p-4 lg:p-5 grow">
            <Outlet />
          </main>
        </div>

        {/* --- Sidebar --- */}
        <div className="drawer-side z-50 overflow-visible font-nunito">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <div
            className="flex h-full flex-col bg-base-100 border-r border-base-content/10 
            w-80 md:w-20 lg:w-64 transition-all duration-300 shadow-xl overflow-visible"
          >
            <div className="p-6 mb-4 md:hidden lg:block">
              <h6 className="font-arsenal text-[11px] font-bold uppercase tracking-[4px] opacity-40">
                Main Menu
              </h6>
            </div>

            <ul className="menu w-full grow px-3 space-y-2 overflow-visible">
              {menu.map((item) => (
                <li key={item.name} className="overflow-visible">
                  <NavLink
                    to={item.path}
                    {...(item.path === "/dashboard" ? { end: true } : {})}
                    className={({ isActive }) =>
                      `flex items-center gap-4 py-3 px-4 rounded-none transition-all duration-300 group relative
                      md:justify-center lg:justify-start
                      tooltip tooltip-right tooltip-primary md:before:content-none md:after:content-none lg:before:content-none lg:after:content-none
                      ${
                        isActive
                          ? "bg-primary text-primary-content font-bold shadow-md"
                          : "text-base-content/70 hover:bg-primary/10 hover:text-primary active:bg-primary/20"
                      }`
                    }
                    data-tip={item.name}
                  >
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-center"></span>

                    <span className="shrink-0 transition-transform group-hover:scale-110">
                      {item.icon}
                    </span>

                    <h4 className="md:hidden lg:block text-sm tracking-tight font-semibold">
                      {item.name}
                    </h4>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="p-4 mt-auto border-t border-base-content/10">
              <button
                onClick={() => signOutUser()}
                className="flex items-center md:justify-center lg:justify-start gap-4 px-5 py-3.5 w-full rounded-none font-bold text-sm text-error hover:bg-error/10 transition-all group tooltip tooltip-right tooltip-error md:before:content-none md:after:content-none lg:before:content-none lg:after:content-none"
                data-tip="Logout"
              >
                <LogOut
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <h4 className="md:hidden lg:block font-semibold">Logout</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
