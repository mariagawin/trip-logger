// import path from "path";
import express from "express";

import {
  getUsers,
  addUser,
  updateUser,
  removeUser,
  // getOwnUsers,
  // addOwnUser,
  // updateOwnUser,
  // removeOwnUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.get("/:id?", getUsers);
//   .post("/", addUser)
//   .put("/:id", updateUser)
//   .delete("/:id", removeUser);

export default router;
