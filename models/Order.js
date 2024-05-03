import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
