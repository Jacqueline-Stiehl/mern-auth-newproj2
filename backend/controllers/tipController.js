const { Tip, User } = require("../models");
const Model = Tip;

//get all Tip posts
async function find(criteria = {}) {
  try {
    const payload = await Model.find(criteria).populate("commentId");
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

//get Tip post by id
async function findById(id) {
  try {
    const payload = await Model.findById(id);
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

// create new Tip post
async function create(body) {
  try {
    const payload = await Model.create(body);
    console.log(payload);
    const userUpdate = await User.findOneAndUpdate(
      { _id: payload.userId },
      {
        $push: { myTips: payload },
      }
    );
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

// update existing Tip post by id
async function updateById(id, body) {
  try {
    const payload = await Model.findByIdAndUpdate(id, body, { new: true });
    return payload;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

// delete Tip post by id
async function remove(id) {
  try {
    const payload = await Model.findByIdAndDelete(id);
    const userUpdate = await User.findOneAndUpdate(
      { _id: payload.userId },
      {
        $pull: { myForums: payload._id },
      },
      {
        new: true,
      }
    );
    return userUpdate;
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    throw new Error(err);
  }
}

module.exports = {
  find,
  findById,
  create,
  updateById,
  remove,
};
