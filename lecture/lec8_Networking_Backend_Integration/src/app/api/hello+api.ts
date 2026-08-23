// make this file a GET endpoint

export function GET(request: Request) {
  return Response.json({hello : "world"});
}