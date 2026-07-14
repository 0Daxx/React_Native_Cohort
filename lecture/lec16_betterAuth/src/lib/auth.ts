import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    host: "aws-1-ap-south-1.pooler.supabase.com",
    port: 6543,
    user: "postgres.lttpormhttyktlswmudb",
    password: process.env.DB_PASSWORD!,
    database: "postgres",
    ssl: {
      rejectUnauthorized: false,
    },
  }),
});