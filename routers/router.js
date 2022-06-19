import express from "express";
import {
  getAll,
  getUser,
  registerUser,
  getXaByIdHuyen,
  getHuyenByIdTinh,
} from "../controllers/users.controller.js";
const router = express.Router();

router.get("/", getAll);
router.get("/user", getUser);
// router.get("/insert",insertData);
router.get("/getHuyenByIdTinh", getHuyenByIdTinh);
router.get("/getXaByIdHuyen", getXaByIdHuyen);
router.post("/register", registerUser);
export default router;
