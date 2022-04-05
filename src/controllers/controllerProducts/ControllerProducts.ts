import express, { Request, Response } from "express";
import { ProductsService } from "../../service/products/ProductsService";

class ControllerProducts {
  async handle(req: Request, res: Response) {
    const { id, name, price, description, banner, category_id } = req.body;
    const productsService = new ProductsService();

    const product = await productsService.execute({
      name,
      price,
      description,
      banner,
      category_id,
    });

    return res.json(product);
  }
}

export { ControllerProducts };
