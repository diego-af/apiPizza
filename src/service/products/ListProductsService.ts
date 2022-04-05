import prismaClient from "../../prisma";

class ListProductsService {
  async execute() {
    const products = prismaClient.product.findMany();

    return products;
  }
}

export { ListProductsService };
