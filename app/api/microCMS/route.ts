// import { NextApiResponse } from "next";
// import { NextResponse } from "next/server";

// export async function POST(req: Request, res: NextApiResponse) {
//   const { limit } = await req.json();

//   const response = await fetch(`https://ok9cn0dgxz.microcms.io/api/v1/blogs?limit=${limit}`);

//   if (response.status !== 200) {
//     return NextResponse.json(response.statusText, { status: response.status });
//   }

//   return NextResponse.json(await response.json(), { status: response.status });
// }
