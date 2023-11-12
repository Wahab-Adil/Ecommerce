//coupon model
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CouponSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);
CouponSchema.virtual("isExpired").get(function () {
  return this.endDate < Date.now();
});

CouponSchema.pre("validate", function (next) {
  if (this.endDate < this.startDate) {
    next(new Error("End Date can not less then Start Date"));
  }
  next();
});

CouponSchema.pre("validate", function (next) {
  if (this.discount <= 0 || this.discount >= 100) {
    next(new Error("discount can not be less then 0 or greater then 100"));
  }
  next();
});

CouponSchema.pre("validate", function (next) {
  if (this.startDate < Date.now()) {
    next(new Error("Start date can not be less then today"));
  }
  next();
});

CouponSchema.pre("validate", function (next) {
  if (this.endDate < Date.now()) {
    next(new Error("End date can not be less then today"));
  }
  next();
});

const coupenModel = mongoose.model("Coupon", CouponSchema);

export default coupenModel;
