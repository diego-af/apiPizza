import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import { router } from "./routes";
import "express-async-errors";

const app = express();

app.use(express.json());

app.use(router);
app.use(cors());

app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof Error) {
    return res.status(400).json({ err: err.message });
  }

  return res.status(500).json({
    message: "Erro internal",
    status: "Message",
  });
});

app.listen(3333, () => console.log("rodando Servidor"));
