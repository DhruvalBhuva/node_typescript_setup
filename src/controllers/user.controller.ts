import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  findAndUpdate,
  findUser,
} from "../services/user.services";
import User from "../models/user.models";

interface params {
  x: number;
  y: number;
}
type sumCheck = (returnType: params) => number;

const homeDetailes = async (req: Request, res: Response) => {
  const newUser = await createUser({ name: "test", dept: "test" });

  const updatedUser = await findAndUpdate(
    { name: "test" },
    { name: "Dhruval" },
    { new: true }
  );

  const user = await findUser({ name: "Dhruval" });

  //   const deletedUser = await deleteUser({ name: "Dhruval" }, { new: true });

  const object = { x: 1, y: 2 };
  const data = sumData(object);

  const myStaticMethodData1 = User.myStaticMethod();
  const myStaticMethodData2 = User.myStaticMethod2("Dhruval");

  res.json({
    message: "Hello World",
    data: data,
    user: user,
    staticFunctionData: {
      myStaticMethodData1,
      myStaticMethodData2,
    },
  });
};

const sumData: sumCheck = (params: params) => {
  return params.x + params.y;
};

export { homeDetailes };
