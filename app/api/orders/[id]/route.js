import Order from "@models/Order";
import connectDB from "@utils/index";

export const GET = async (req, res) => {
  await connectDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  try {
    const orderDetails = await Order.find({ id });
    return new Response(JSON.stringify(orderDetails), { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return new Response("Error fetching order", { status: 500 });
  }
};
