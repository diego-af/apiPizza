import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";
interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserCreateService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error("User  incorrect");
    }

    // const passwordMacth = await compare(password, user.password);
    // if (!passwordMacth) {
    //   throw new Error("Password incorrect");
    // }
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },

      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );
    return {
      id: user.id,
      name: user.name,
      emai: user.email,
      token: token,
    };
  }
}

export { AuthUserCreateService };
