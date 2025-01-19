import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {

  const response = await fetch(`https://ok9cn0dgxz.microcms.io/api/v1/blogs`,);

  if (response.status !== 200) {
    return NextResponse.json(response.statusText, { status: response.status });
  }

  return NextResponse.json(await response.json(), { status: response.status });
}
