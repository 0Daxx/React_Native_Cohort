// import { db } from "@lib/db";

import { db } from "../../../lib/db";
// import {db} from "@lib/db";

type context = { params: { id: string } };
type ctx = { id: string } ;

// Why _req , cuz we are not using the request object in this function, so we can use _req to indicate that it's an unused parameter. This is a common convention in TypeScript and JavaScript to avoid linter warnings about unused variables.

export async function GET(_req: Request, { id }: ctx) {
// export async function GET(_req: Request, { params }: context) {
  try {
    const result = await db.execute({
      sql: "SELECT * FROM users_data WHERE id = ?",
      args: [parseInt(id)],
      // args: [parseInt(params.id)], // Type assertion to treat params.id as a string
      // args: [params.id as unknown as string], // Type assertion to treat params.id as a string
    });
    return Response.json(result.rows);
  } catch (error: any) {
    // } catch (error : any) {      // #### what is type of Error
    console.log(error);
    return Response.json({
      message: "Failed to fetch user",
      error: error.message,
      status: 500,
    });
  }
}
export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }
  try {
    const result = await db.execute({
      sql: "INSERT INTO users_data(name , email , password) VALUES (?, ?, ?)",
      args: [name, email, password],
    });

    return Response.json({
      message: "User created successfully",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

export async function PATCH(request: Request, { params }: context) {
  // patch is used to update partial data , so i think first need to check what params are there

  const { name, email, password } = await request.json();
  if (!name && !email && !password) {
    return Response.json({
      error: "No fields to update",
      status: 400,
    });
  }

  try {
    const result = await db.execute({
      sql: "UPDATE users_data SET name(?) , ",
    });
  } catch (error) {}

  // const { name, email, password } = await request.json();
  // if (!name && !email && !password) {
  //   return new Response(JSON.stringify({
  // error: "No fields to update" })
  // , {
  //     status: 400,
  //   });
  // }
  // try {
  //   const result = await db.execute({
  //     sql: "UPDATE users_data SET name = COALESCE(?, name), email = COALESCE(?, email), password = COALESCE(?, password) WHERE id = ?",
  //     args: [name, email, password, params.id],
  //   });
  //   return Response.json({ message: "User updated successfully" });
  // } catch (error) {
  //   console.error(error);
  //   return new Response(JSON.stringify({ error: "Internal server error" }), {
  //     status: 500,
  //   });
  // }
}

export async function DELETE(request: Request, { params }: context) {}

/*
CREATE TABLE IF NOT EXISTS users_data (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

*/
