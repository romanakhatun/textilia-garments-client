import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner";
import {
  FiClock,
  FiCheckCircle,
  FiBox,
  FiTruck,
  FiAlertCircle,
} from "react-icons/fi";
import { Link } from "react-router";

const ManagerDashboard = () => {
  const axiosSecure = useAxiosSecure();

  // ১. সকল অর্ডারের ডেটা ফেচ করা (স্ট্যাটাস অনুযায়ী আলাদা করার জন্য)
  const { data: allOrders = [], isLoading: ordersLoading } = useQuery({
    queryKey: ["manager-orders-overview"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders");
      return res.data;
    },
  });

  // ২. প্রোডাক্টের সংখ্যা জানার জন্য
  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ["manager-products-overview"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    },
  });

  if (ordersLoading || productsLoading)
    return <LoadingSpinner message="Syncing production data..." />;

  // ফিল্টারিং লজিক
  const pendingOrders = allOrders.filter((o) => o.status === "pending");
  const approvedOrders = allOrders.filter((o) => o.status === "approved");

  const stats = [
    {
      label: "Pending Approvals",
      value: pendingOrders.length,
      icon: <FiClock className="text-warning" />,
      link: "/dashboard/pending-orders",
      color: "border-l-warning",
    },
    {
      label: "In Production",
      value: approvedOrders.length,
      icon: <FiCheckCircle className="text-success" />,
      link: "/dashboard/approved-orders",
      color: "border-l-success",
    },
    {
      label: "Total Products",
      value: products.length,
      icon: <FiBox className="text-primary" />,
      link: "/dashboard/manage-products",
      color: "border-l-primary",
    },
  ];

  return (
    <div className="p-6 lg:p-10 space-y-8 font-nunito">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h4 className="text-3xl font-bold font-nunito">
          Production <span className="highlight-text">Manager Control</span>
        </h4>
        <p className="text-base-content/70">
          Monitoring the production line and inventory.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Link
            to={stat.link}
            key={i}
            className={`card bg-base-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-base-content/10 border-l-4 ${stat.color}  transition-all cursor-pointer`}
          >
            <div className="card-body flex-row items-center justify-between p-6">
              <div>
                <p className="text-sm font-semibold opacity-70 uppercase tracking-wider">
                  {stat.label}
                </p>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
              </div>
              <div className="text-4xl opacity-20">{stat.icon}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Urgent Attention: Pending Orders */}
        <div className="bg-base-100 border border-base-content/10 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-nunito text-xl font-bold flex items-center gap-2">
              <FiAlertCircle className="text-error" /> Needs Approval
            </h4>
            <Link
              to="/dashboard/pending-orders"
              className="btn btn-xs btn-ghost text-primary underline"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            {pendingOrders.slice(0, 4).map((order) => (
              <div
                key={order._id}
                className="flex justify-between items-center p-3 border border-base-content/10 rounded-lg"
              >
                <div>
                  <p className="font-bold text-sm truncate w-40">
                    {order.productName}
                  </p>
                  <p className="text-xs opacity-60">Qty: {order.quantity}</p>
                </div>
                <Link
                  to="/dashboard/pending-orders"
                  className="btn btn-xs btn-success text-white border-0 shadow-none"
                >
                  Review
                </Link>
              </div>
            ))}
            {pendingOrders.length === 0 && (
              <p className="text-center py-4 opacity-50 italic">
                No pending orders!
              </p>
            )}
          </div>
        </div>

        {/* Quick Tips/Production Status */}
        <div className="bg-secondary text-secondary-content rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-arsenal mb-2 text-white">
              Production Tip
            </h3>
            <p className="opacity-90 italic mb-6">
              "Keeping tracking updates regular increases buyer trust by 40%.
              Make sure to update the status once QC is checked."
            </p>
            <div className="flex gap-4">
              <Link
                to="/dashboard/approved-orders"
                className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-secondary rounded-none font-bold uppercase"
              >
                Update Tracking
              </Link>
            </div>
          </div>
          <FiTruck className="absolute -right-5 -bottom-5 text-white/10 text-9xl rotate-12" />
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
