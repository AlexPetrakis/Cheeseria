import cors from "cors";
import express from "express";
import expressPinoLogger from "express-pino-logger";
import helmet from "helmet";
import path from "path";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import logger from "./logger";
import { CheeseRouter } from "./routes";
import swaggerDefinition from "./swaggerDefinition";

const options = {
  ...swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};

const swaggerSpec = swaggerJsdoc(options);

const app = express();
app.use(express.static(path.join(__dirname, "/public")));

const loggerMidlleware = expressPinoLogger({
  logger,
});
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { explorer: true })
);

app.use(loggerMidlleware);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(CheeseRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

export default app;
