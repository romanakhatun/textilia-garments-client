import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import {
  FiShoppingBag,
  FiUsers,
  FiPackage,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: orders = [], isLoading: ordersLoading } = useQuery({
    queryKey: ["admin-orders-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders");
      return res.data;
    },
  });

  const { data: users = [], isLoading: usersLoading } = useQuery({
    queryKey: ["admin-users-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ["admin-products-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    },
  });

  if (ordersLoading || usersLoading || productsLoading) {
    return <LoadingSpinner message="Calculating statistics..." />;
  }

  // Basic Calculations
  const totalRevenue = orders.reduce(
    (sum, order) => sum + (order.orderTotal || 0),
    0,
  );
  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const totalCustomers = users.filter((u) => u.role === "buyer").length;

  const stats = [
    {
      id: 1,
      title: "Total Revenue",
      value: `$${totalRevenue.toLocaleString()}`,
      icon: <FiDollarSign className="text-success" size={24} />,
      desc: "Gross income from all orders",
    },
    {
      id: 2,
      title: "Total Orders",
      value: orders.length,
      icon: <FiShoppingBag className="text-primary" size={24} />,
      desc: `${pendingOrders} orders are pending`,
    },
    {
      id: 3,
      title: "Total Products",
      value: products.length,
      icon: <FiPackage className="text-secondary" size={24} />,
      desc: "Items available in shop",
    },
    {
      id: 4,
      title: "Total Buyers",
      value: totalCustomers,
      icon: <FiUsers className="text-info" size={24} />,
      desc: "Registered customers",
    },
  ];

  return (
    <div className="p-6 lg:p-10 space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col gap-2">
        <h4 className="text-3xl font-bold">
          Admin <span className="highlight-text">Insights</span>
        </h4>
        <p className="text-base-content/70 font-nunito">
          Welcome back! Here's a quick summary of your business performance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="card bg-base-100 border border-base-content/10 shadow-sm"
          >
            <div className="card-body p-5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-nunito">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className="p-3 rounded-lg">{stat.icon}</div>
              </div>
              <p className="text-xs mt-4 flex items-center gap-1">
                <FiTrendingUp /> {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section: Recent Orders & Quick Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders List */}
        <div className="bg-base-100 border border-base-content/10 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold font-arsenal mb-4">
            Recent Transactions
          </h3>
          <div className="overflow-x-auto">
            <table className="table table-sm w-full font-nunito">
              <thead>
                <tr className="text-base-content/50">
                  <th>Order ID</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 5).map((order) => (
                  <tr key={order._id}>
                    <td className="text-xs truncate max-w-[100px]">
                      {order._id}
                    </td>
                    <td className="font-semibold">${order.orderTotal}</td>
                    <td>
                      <span
                        className={`badge text-white badge-xs ${
                          order.status === "approved"
                            ? "badge-success"
                            : order.status === "pending"
                              ? "badge-warning"
                              : "badge-ghost"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Summary */}
        <div className="bg-primary text-primary-content rounded-xl p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-arsenal mb-2">
              Platform Health
            </h3>
            <p className="opacity-80 font-nunito mb-6">
              All systems are operational. You have {pendingOrders} orders that
              require your immediate attention.
            </p>
            <div className="flex gap-3">
              <button className="btn btn-sm bg-white text-primary border-none rounded-none uppercase text-xs tracking-wider">
                Check Pending
              </button>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
