import mongoose from "mongoose";

export default async () => {
  if(mongoose.connections[0].readyState){
    console.log("Already connected to database");
    return;
  } 
  await mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log("Database connection error: " + err.toString()));
}