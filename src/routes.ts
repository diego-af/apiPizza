import express, { Router, Request, Response } from "express";
import { CreateUserController } from "../src/controllers/controlerUser/CreateUserController";
// import { ListUserController } from "./controllers/controlerUser/ListUserController";
import { AuthUserController } from "./controllers/controlerUser/AuthUserController";
import { DetailsUserController } from "./controllers/controlerUser/DetailsUserController";
import { IsAuthAutenticat } from "../src/middlewares/IsAuthAutenticate";
import { CategoryController } from "../src/controllers/controllerCategory/CategoryController";
import { ListCategoryController } from "../src/controllers/controllerCategory/ListCategoryController";
import { ControllerProducts } from "../src/controllers/controllerProducts/ControllerProducts";
import { ControllerListProducts } from "../src/controllers/controllerProducts/ControllerListProducts";

const router = Router();
const createUserController = new CreateUserController();
// const listUserController = new ListUserController();
const authUserController = new AuthUserController();
const detailUserController = new DetailsUserController();

const categoryController = new CategoryController();
const listCategoryController = new ListCategoryController();

const controllerProducts = new ControllerProducts();
const controllerListProducts = new ControllerListProducts();

router.post("/users", createUserController.handle);
router.post("/session", authUserController.handle);
router.get("/userinfo", IsAuthAutenticat, detailUserController.handle);

//categorys routes
router.post("/category", categoryController.handle);
router.get("/category", listCategoryController.handle);

//products routes

router.post("/products", controllerProducts.handle);
router.get("/products", controllerListProducts.handle);

export { router };
