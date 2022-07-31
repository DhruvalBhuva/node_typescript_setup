import mongoose, { connect } from "mongoose";

const dbConnection = (): void => {
  connect("mongodb://localhost:27017/demo").then(() => {
    console.log("Connected to database");
  });
};

export default dbConnection;
