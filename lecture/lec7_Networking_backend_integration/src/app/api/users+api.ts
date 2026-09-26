import { db } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const result = await db.execute({
      sql: "SELECT * FROM users_data",
    });
    return Response.json(result.rows);
  } catch (error) {
    return  Response.json(
      { error: "Failed to fetch data from the database", status: 500 },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {}
