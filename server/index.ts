import dotenv from "dotenv";
import path from "path";
import express, { NextFunction, Request, Response } from "express";
import { createDevServer } from "./dev-server";

dotenv.config();
const { NODE_ENV, PORT } = process.env;

const bootstrap = async () => {
  const app = express();

  if (NODE_ENV === "development") {
    await createDevServer(app);
  }

  app.get("/api/habits", (req: Request, res: Response) => {
    res.send(200);
  });

  app.get("/api/habits/:id", (req: Request, res: Response) => {
    res.send(200);
  });

  app.post("/api/habits", (req: Request, res: Response) => {
    res.send(200);
  });

  app.put("/api/habits/:id", (req: Request, res: Response) => {
    res.send(200);
  });

  app.delete("/api/habits/:id", (req: Request, res: Response) => {
    res.send(200);
  });

  app.delete("/api/habits", (req: Request, res: Response) => {
    res.send(200);
  });

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

await bootstrap();
