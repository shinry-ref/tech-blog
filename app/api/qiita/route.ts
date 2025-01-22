import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { page } = await req.json();

  const response = await fetch(
    `https://qiita.com/api/v2/authenticated_user/items?page=1&per_page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_API_TOKEN}`,
      },
    }
  );

  if (response.status !== 200) {
    return NextResponse.json(response.statusText, { status: response.status });
  }

  return NextResponse.json(await response.json(), { status: response.status });
}
