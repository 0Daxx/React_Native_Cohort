import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { expo } from "@better-auth/expo";

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
  plugins:[expo()],
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }
  }, 
});