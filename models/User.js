import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
      type: Object,
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
    profileImage: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin", "provider"],
      default: "user",
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

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
