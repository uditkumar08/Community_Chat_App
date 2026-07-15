import Redis from "ioredis";
import { env } from "./env";

export const redis = new Redis(env.redisUrl);
// connect for temporary checking as we with ioredis connection establish auto next code for own satisfaction
redis.on("connect", () => {
  console.log("Redis connected");
});

redis.on("error", (err) => {
  console.error("[redis] Connection Error:", err.message);
});