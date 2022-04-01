import prismaClient from "../../prisma/index";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}
interface UserGetRequest {
  name: string;
  email: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) {
      throw new Error("Email required");
    }
    const alreadyEmailExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (alreadyEmailExists) {
      throw new Error("Email already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
}

export { CreateUserService };
