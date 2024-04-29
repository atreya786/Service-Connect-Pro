/** @type {import('next').NextConfig} */
import "dotenv/config";

const nextConfig = {
  env: {
    NEXT_RAZORPAY_KEY_ID: process.env.NEXT_RAZORPAY_KEY_ID,
    NEXT_RAZORPAY_KEY_SECRET: process.env.NEXT_RAZORPAY_KEY_SECRET,
  },
};

export default nextConfig;
