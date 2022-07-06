import express from "express";
import {
  getAll,
  getUser,
  registerUser,
  getXaByIdHuyen,
  getHuyenByIdTinh,
} from "../controllers/users.controller.js";
import {
  findArtitcle
} from "../controllers/article.controller.js";
import {
  getCategories,
  getCategoriesList,
} from "../controllers/categories.controller.js";
const router = express.Router();
router.get("/findArticle", findArtitcle);
router.get("/", getAll);
router.get("/user", getUser);
router.get("/categories", getCategories);
router.get("/categoriesList", getCategoriesList);
// router.get("/insert",insertData);
router.get("/getHuyenByIdTinh", getHuyenByIdTinh);
router.get("/getXaByIdHuyen", getXaByIdHuyen);
router.post("/register", registerUser);
export default router;
