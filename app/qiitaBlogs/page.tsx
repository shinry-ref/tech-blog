import React from "react";
import { QiitaBlog } from "../types/qiitaBlog";
import QiitaCard from "../components/QiitaCard";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const page = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/qiita`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page: 20 }),
  });
  const qiitaItems: QiitaBlog[] = await res.json();


  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center flex-col">
      <div className="justify-self-start w-full p-4">
        <a href="/" className="btn btn-primary">
          戻る
        </a>
      </div>
      <div className="container mx-auto p-4 bg-white rounded-lg m-4">
        <h1 className="text-4xl font-bold px-4">個人一覧</h1>
        <div className="grid grid-cols-4 gap-4">
          {qiitaItems.map((item) => (
            <QiitaCard key={item.url} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
