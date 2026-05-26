import mongoose from "mongoose";

const qrSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["main", "table"],
      required: true,
    },
    tableNumber: {
      type: Number,
      default: null,
    },
    originalUrl: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const QrCode = mongoose.model("qrCode", qrSchema);
export default QrCode;