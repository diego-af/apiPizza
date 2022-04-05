import express, { Request, Response } from "express";
import { ListProductsService } from "../../service/products/ListProductsService";

class ControllerListProducts {
  async handle(req: Request, res: Response) {
    const listProductsService = new ListProductsService();

    const response = await listProductsService.execute();

    return res.json(response);
  }
}

export { ControllerListProducts };
