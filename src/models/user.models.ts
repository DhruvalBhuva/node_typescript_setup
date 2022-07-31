import { Schema, Model, Document, model } from "mongoose";

export interface UserDocuments extends Document {
  name: string;
  dept: string;
}

interface User {
  name: string;
  dept: string;
}

interface UserModel extends Model<User> {
  myStaticMethod: () => number;
  myStaticMethod2: (name: string) => string;
}

const userSchema = new Schema<User, UserModel>({
  name: { type: String, required: true },
  dept: { type: String, required: true },
});

userSchema.statics.myStaticMethod = function () {
  return 1;
};

userSchema.statics.myStaticMethod2 = function (name: string) {
  return name + "Demo";
};

const UserModel = model<User, UserModel>("User", userSchema);
export default UserModel;
