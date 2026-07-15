import { redis } from "../config/redis";

const OTP_TTL_SECONDS = 600; // 10 minutes
const otpKey = (email: string) => `otp:${email.toLowerCase()}`;

export function generateOtp(): string {
  return String(Math.floor(100000 + Math.random() * 900000)); // 6 digits
}

export async function storeOtp(email: string, otp: string): Promise<void> {
  await redis.set(otpKey(email), otp, "EX", OTP_TTL_SECONDS);
}


// auto read and del the otpfor only ever used ones
export async function consumeOtp(email: string): Promise<string | null> {
  // ioredis supports GETDEL directly on recent Redis versions
  const value = await redis.getdel(otpKey(email));
  return value;
}
