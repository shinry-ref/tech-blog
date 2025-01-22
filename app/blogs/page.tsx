// "use client";

import React from "react";
import { MicroCMS } from "../types/microCMS";
import { client } from "../utils/client";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const page = async () => {
  // const [microCMSItems, setMicroCMSItems] = useState<MicroCMS[]>([]);

  // useEffect(() => {
  //   getMicroCMS(5);
  // }, []);

  const res = await client.get({
    endpoint: "blogs",
    queries: {
      limit: 5,
    },
  });
  // setMicroCMSItems(res.contents);
  const microCMSItems: MicroCMS[] = res.contents;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center flex-col">
      <div className="justify-self-start w-full p-4">
        <a href="/" className="btn btn-primary">
          戻る
        </a>
      </div>
      <div className="container mx-auto p-4 bg-white rounded-lg m-4">
        <h1 className="text-4xl font-bold px-4">ブログ記事一覧</h1>
        <div className="grid grid-cols-4 gap-4">
          {microCMSItems.map((item) => (
            <div className="flex justify-center m-4" key={item.id}>
              <div className="card bg-base-100 max-w-96 shadow-xl">
                <figure>
                  <img src={item.thumbnail.url} alt={item.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div className="card-actions justify-end">
                    <a href={`blogs/${item.id}`} className="btn btn-primary">
                      記事を見る
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
