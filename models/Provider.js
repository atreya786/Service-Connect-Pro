import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is unique"],
    },
    mobile: {
      type: Number,
      required: [true, "Mobile is required"],
      unique: [true, "Mobile is unique"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    businessName: {
      type: String,
      default: "",
    },
    businessCategory: {
      type: String,
      default: "",
    },
    businessPhoto: {
      type: String,
      default: "",
    },
    role: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 100,
    },
    orders: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Provider =
  mongoose.models.Provider || mongoose.model("Provider", ProviderSchema);

export default Provider;
