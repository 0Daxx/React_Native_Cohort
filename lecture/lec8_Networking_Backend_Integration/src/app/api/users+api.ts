// import {db} from "@lib/db";
import {db} from "../../lib/db";

export async function GET() {
  // export async function GET(request: Request){
  try {
    const result = await db.execute({
      sql: "SELECT * FROM users_data",
    });
    return Response.json(result.rows);
  } catch (error) {
    return Response.json({
      error: "Failed to fetch users",
      status: 500,
    });
  }
}
export async function POST(request: Request) {
  // export async function GET(request: Request){
  try {
    const { name, email, password } = await request.json();
    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }
    const result = await db.execute({
      sql: "INSERT INTO users_data(name , email , password) VALUES (?, ?, ?)",
      args: [name, email, password],
    });

    return Response.json({
      message: "User created successfully",
      status: 201,
    });
  } catch (error) {}
}
