import { GrFormNext } from "react-icons/gr";
import { client } from "./utils/client";
import { QiitaBlog } from "./types/qiitaBlog";
import { MicroCMS } from "./types/microCMS";
import QiitaCard from "./components/QiitaCard";
import MicroCmsCard from "./components/MicroCmsCard";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Page() {

  const qiitaRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/qiita`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page: 4 }),
  });
  const qiitaItems: QiitaBlog[] = await qiitaRes.json();

  const cmsRes = await client.get({
    endpoint: "blogs",
    queries: {
      limit: 4,
    },
  });

  const microCMSItems: MicroCMS[] = cmsRes.contents;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl text-white p-4 w-full bg-slate-500">Tech Blog</h1>
      <div className="container mx-auto p-4 bg-white rounded-lg m-4">
        <h1 className="text-4xl font-bold px-4">個人記事</h1>
        <div className="grid grid-cols-4 gap-4">
          {qiitaItems.map((item) => (
            <QiitaCard key={item.url} item={item} />
          ))}
        </div>
        <div className="flex justify-end w-full p-4">
          <a href="/qiitaBlogs" className="btn btn-primary">
            もっと見る <GrFormNext />
          </a>
        </div>
      </div>

      <div className="container mx-auto p-4 bg-white rounded-lg m-4">
        <h1 className="text-4xl font-bold px-4">ブログ記事</h1>
        <div className="grid grid-cols-4 gap-4">
          {microCMSItems.map((item) => (
            <MicroCmsCard key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-end w-full p-4">
          <a href="/blogs" className="btn btn-primary">
            もっと見る <GrFormNext />
          </a>
        </div>
      </div>
    </div>
  );
}
