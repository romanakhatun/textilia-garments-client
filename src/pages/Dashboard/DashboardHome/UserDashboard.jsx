import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { ShoppingBag, Truck, Clock, ArrowRight } from "lucide-react";

const UserDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Dashboard stats er jonno data fetch
  const { data: orders = [] } = useQuery({
    queryKey: ["my-orders-stats", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user.email}`);
      return res.data;
    },
  });

  const pendingOrders = orders.filter((o) => o.status === "pending").length;
  const shippedOrders = orders.filter((o) => o.status === "shipped").length;

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h4 className="text-3xl font-bold font-nunito">
            Welcome back,{" "}
            <span className="highlight-text">
              {user?.displayName || "Buyer"}
            </span>
            !
          </h4>
          <p className="text-base-content/70 font-nunito mt-1">
            Here's what's happening with your orders today.
          </p>
        </div>
        <Link to="/all-products" className="btn-primary px-6 py-2 text-sm">
          Continue Shopping
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stats shadow bg-base-100 border border-base-content/10">
          <div className="stat">
            <div className="stat-figure text-primary">
              <ShoppingBag size={32} />
            </div>
            <div className="stat-title font-nunito">Total Orders</div>
            <div className="stat-value text-secondary">{orders.length}</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100 border border-base-content/10">
          <div className="stat">
            <div className="stat-figure text-warning">
              <Clock size={32} />
            </div>
            <div className="stat-title font-nunito">Pending</div>
            <div className="stat-value text-warning">{pendingOrders}</div>
          </div>
        </div>

        <div className="stats shadow bg-base-100 border border-base-content/10">
          <div className="stat">
            <div className="stat-figure text-success">
              <Truck size={32} />
            </div>
            <div className="stat-title font-nunito">In Transit</div>
            <div className="stat-value text-success">{shippedOrders}</div>
          </div>
        </div>
      </div>

      {/* Recent Orders Preview */}
      <div className="bg-base-100 border border-base-content/10 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xl font-bold">Recent Orders</h4>
          <Link
            to="/dashboard/my-orders"
            className="text-primary flex items-center gap-1 text-sm font-bold hover:underline"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          {orders.length > 0 ? (
            <table className="table ">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 3).map((order) => (
                  <tr key={order._id}>
                    <td className="font-semibold">{order.productName}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>
                      <span
                        className={`badge badge-sm text-white ${order.status === "pending" ? "badge-warning" : "badge-success"}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <Link
                        to={`/dashboard/track-order/${order._id}`}
                        className="btn btn-xs btn-ghost underline"
                      >
                        Track
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-10 opacity-60">
              No recent activity found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
