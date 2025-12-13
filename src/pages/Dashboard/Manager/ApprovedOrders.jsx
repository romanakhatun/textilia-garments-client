import useApproveOrder from "../../../hooks/useApproveOrder";

const ApprovedOrders = () => {
  const approveOrder = useApproveOrder();
  console.log(approveOrder);

  return <div>ApprovedOrders</div>;
};

export default ApprovedOrders;
