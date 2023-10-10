const { Schema, model, Types, ObjectId } = require("mongoose");

const tipSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    upvote: {
      type: integer,
    },

    downvote: {
      type: integer,
    },

    isActive: {
      type: boolean,
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
    id: false,
  }
);

const Journal = model("Tip", tipSchema);

module.exports = Tip;
