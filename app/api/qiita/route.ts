import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  const { page } = await req.json();

  const response = await fetch(
    `https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=${page}`,
    {
      headers: {
        Authorization: "Bearer b014cdf5c3ff452642b8410f51b810d5d01b783a",
      },
    }
  );

  if (response.status !== 200) {
    return NextResponse.json(response.statusText, { status: response.status });
  }

  return NextResponse.json(await response.json(), { status: response.status });
}
