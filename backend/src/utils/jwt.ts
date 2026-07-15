import jwt from "jsonwebtoken";
import { env } from "../config/env";

export interface TokenPayload {
  userId: string;
}

export function signAccessToken(userId: string): string {
  return jwt.sign({ userId } satisfies TokenPayload, env.jwtAccessSecret, {
    expiresIn: "15m"
  });
}

export function signRefreshToken(userId: string): string {
  return jwt.sign({ userId } satisfies TokenPayload, env.jwtRefreshSecret, {
    expiresIn: "7d"
  });
}

export function verifyAccessToken(token: string): TokenPayload {
  return jwt.verify(token, env.jwtAccessSecret) as TokenPayload;
}

export function verifyRefreshToken(token: string): TokenPayload {
  return jwt.verify(token, env.jwtRefreshSecret) as TokenPayload;
}
