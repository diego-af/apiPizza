import express, { Request, Response } from "express";
import { AuthUserCreateService } from "../../service/user/AuthUserCreateService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const authUserCreateService = new AuthUserCreateService();
    const user = await authUserCreateService.execute({ email, password });

    return res.json(user);
  }
}

export { AuthUserController };
