// import { createClient } from "@libsql/client/web";
// const db = createClient({
//   url: process.env.TURSO_DATABASE_URL!,
//   authToken: process.env.TURSO_AUTH_TOKEN!,
// });

// export default db;

import { createClient } from "@libsql/client/web";


export const db = createClient({
    url:process.env.TURSO_DATABASE_URL! ,
    authToken:process.env.TURSO_AUTH_TOKEN
})

// url: process.env.TURSO_DATABASE_URL!,
// Type 'string | undefined' is not assignable to type 'string'.   Type 'undefined' is not assignable to type 'string'.
// url: process.env.TURSO_DATABASE_URL as string,  // ERROR
