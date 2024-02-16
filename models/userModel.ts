import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  userName: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  telephone: {
    type: String,
    required: [true, "Please provide a phone number"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Please provide an address"],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
