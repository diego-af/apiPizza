import express, { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}
export function IsAuthAutenticat(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    // console.log("entrou aqui");
    return res.status(401).end();
  }
  const [, token] = authToken.split(" ");
  if (token) {
    console.log("token", token);
  }
  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
    console.log(sub);
    req.user_id = sub;
    console.log(req.user_id);
    return next();
  } catch (err) {
    console.log("entrou aqui");
    return res.status(401).end();
  }
}
