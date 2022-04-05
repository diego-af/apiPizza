import prismaClient from "../../prisma";

interface GetProducts {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}
class ProductsService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: GetProducts) {
    const products = prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id,
      },
    });

    return products;
  }
}

export { ProductsService };
