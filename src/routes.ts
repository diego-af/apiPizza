import express, { Router, Request, Response } from "express";
import { CreateUserController } from "../src/controllers/controlerUser/CreateUserController";
// import { ListUserController } from "./controllers/controlerUser/ListUserController";
import { AuthUserController } from "./controllers/controlerUser/AuthUserController";
import { DetailsUserController } from "./controllers/controlerUser/DetailsUserController";
import { IsAuthAutenticat } from "../src/middlewares/IsAuthAutenticate";

const router = Router();
const createUserController = new CreateUserController();
// const listUserController = new ListUserController();
const authUserController = new AuthUserController();
const detailUserController = new DetailsUserController();

router.post("/users", createUserController.handle);
router.post("/session", authUserController.handle);
router.get("/userinfo", IsAuthAutenticat, detailUserController.handle);

export { router };
