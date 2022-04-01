import express, { Request, Response } from "express";
import { CreatCategoryService } from "../../service/category/CreateCategoryService";

class CategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const createCategoryService = new CreatCategoryService();

    const category = await createCategoryService.execute({ name });

    return res.json(category);
  }
}

export { CategoryController };
