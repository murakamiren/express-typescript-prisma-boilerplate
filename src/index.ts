import { PrismaClient } from "@prisma/client";
import express from "express";
import { port } from "./constant/config";

const prisma = new PrismaClient();
const app = express();

const main = async () => {
  console.log("hello prisma");
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.listen(port, () => {
  console.log(`server start. listening port ${port}`);
});
