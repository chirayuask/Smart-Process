import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });

export const envConfig = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  MONGODB_URL : process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/test',
  HUGGING_FACE_TOKEN : process.env.HUGGING_FACE_TOKEN || ''
};
