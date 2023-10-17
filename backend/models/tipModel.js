const { Schema, model, Types, ObjectId } = require("mongoose");

const tipSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    upvote: {
      type: Number,
    },

    downvote: {
      type: Number,
    },

    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },

    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // dateCreated: {
    //   type: Date,
    //   default: Date.now
    // },
  },
  {
    toJSON: {
      virtuals: true,
    },
    // id: false,
  }
);

const Tip = model("Tip", tipSchema);

module.exports = Tip;
