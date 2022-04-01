import prismaClient from "../../prisma";

interface GetNameRequest {
  name: string;
}
class CreatCategoryService {
  async execute({ name }: GetNameRequest) {
    if (name === "") {
      throw new Error("Name is required");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: false,
        name: true,
      },
    });

    return category;
  }
}

export { CreatCategoryService };
