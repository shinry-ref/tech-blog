import React from "react";
import { MicroCMS } from "../types/microCMS";
import { client } from "../utils/client";
import MicroCmsCard from "../components/MicroCmsCard";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const page = async () => {

  const res = await client.get({
    endpoint: "blogs",
    queries: {
      limit: 5,
    },
  });
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
            <MicroCmsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
