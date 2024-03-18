import Express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/auth.js";
const app = Express();

app.use(Express.json())
app.use("/api/users",userRouter)

function connection() {
  try {
    const connectDb = async function () {
      const connect = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
      if (connect) {
        app.listen(process.env.PORT || 3001, () => {
          console.log("Listening to server and connected to db");
        });
      } else {
        throw new Error("Not connected to Db");
      }
    };
    connectDb();
  } catch (error) {
    console.error("Problem with the code running:", error.message);
  }
}

connection();
