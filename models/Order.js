import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    serviceCategory: {
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
    paymentDetails: PaymentDetailsSchema,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
