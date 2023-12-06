import express from "express";
import { dbCreateConnection } from "./orm/db/dbCreateConnection";
import { User } from "./entities/User";
import userRouter from "./routes/users.route";

const app = express();
app.use(express.json());

//routes
app.use("/api", userRouter)

//Database connection
dbCreateConnection
  .initialize()
  .then(() => {
    // here you can start to work with your database
    console.log("Database connected successfully");
  })
  .catch((err: any) => console.log(err));


//server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
