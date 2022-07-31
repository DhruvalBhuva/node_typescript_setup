import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import User, { UserDocuments } from "../models/user.models";

export const createUser = (input: DocumentDefinition<UserDocuments>) => {
  return User.create(input);
};

export const findUser = (
  query: FilterQuery<UserDocuments>,
  options: QueryOptions = { lean: true }
) => {
  return User.findOne(query, {}, options);
};

export const findAndUpdate = (
  query: FilterQuery<UserDocuments>,
  update: UpdateQuery<UserDocuments>,
  options: QueryOptions
) => {
  return User.findOneAndUpdate(query, update, options);
};

export const deleteUser = (
  query: FilterQuery<UserDocuments>,
  options: QueryOptions
) => {
  return User.findOneAndDelete(query, options);
};

