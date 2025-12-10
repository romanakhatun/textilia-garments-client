import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { MdDelete, MdEdit } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageProducts = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch all products
  const { data: products = [], refetch } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    },
  });

  // Handle Delete
  const handleDelete = async (product) => {
    const confirm = await Swal.fire({
      title: `Delete "${product.name}"?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
    });

    if (!confirm.isConfirmed) return;

    const res = await axiosSecure.delete(`/products/${product._id}`);

    if (res.data.deletedCount > 0) {
      Swal.fire("Deleted!", "Product removed successfully.", "success");
      refetch();
    }
  };

  return (
    <div className="p-6 lg:p-10">
      <h1 className="text-3xl font-bold mb-6">
        Manage Products ({products.length})
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-xl bg-base-100">
        <table className="table">
          <thead>
            <tr className="text-base-content font-semibold">
              <th>#</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th>Available</th>
              <th>Min Order</th>
              <th>Home?</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="hover:bg-base-200 transition">
                <td>{index + 1}</td>

                {/* PRODUCT */}
                <td>
                  <div className="flex items-center gap-4">
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-lg border"
                    />
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                    </div>
                  </div>
                </td>

                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.availableQuantity}</td>
                <td>{product.minimumOrderQuantity}</td>

                {/* Show on Home */}
                <td>
                  {product.showOnHome ? (
                    <span className="badge badge-success">Yes</span>
                  ) : (
                    <span className="badge badge-ghost">No</span>
                  )}
                </td>

                {/* ACTION BUTTONS */}
                <td className="flex gap-3 items-center">
                  {/* Edit Button */}
                  <Link
                    to={`/dashboard/edit-product/${product._id}`}
                    className="btn btn-sm btn-info text-white"
                  >
                    <MdEdit size={18} />
                  </Link>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(product)}
                    className="btn btn-sm btn-error text-white"
                  >
                    <MdDelete size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
