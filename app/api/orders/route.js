import connectToDB from "@utils/index";
import Order from "@models/Order";

export const POST = async (req, res) => {
  try {
    await connectToDB();

    const body = await req.json();

    let userID = body.userID;
    let cartItems = body.cartItems;
    let totalPrice = body.totalPrice;
    let razorpay_payment_id = body.razorpay_payment_id;

    let firstCartItem = cartItems[0];

    let providerId = firstCartItem.providerId;
    let businessName = firstCartItem.businessName;
    let dateTime = firstCartItem.dateTime;
    let time = firstCartItem.time;

    const newOrder = new Order({
      businessName,
      dateTime,
      time,
      providerId,
      userId: userID,
      amount: totalPrice,
      razorpay_payment_id,
    });

    const savedOrder = await newOrder.save();

    return new Response(JSON.stringify(savedOrder), {
      status: 201,
    });
  } catch (error) {
    console.error("Error adding order:", error);
    return new Response(error, {
      status: 500,
    });
  }
};
