import React from "react";
import { client } from "../../utils/client";
import { MicroCMS } from "../../types/microCMS";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const getMicroCMS = async (): Promise<MicroCMS[]> => {
    const res = await client.get({
      endpoint: "blogs",
      queries: { ids: id },
    });
    // setMicroCMSItems(res.contents);
    return res.contents;
  };

  const microCMSItem = await getMicroCMS();
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center flex-col">
        <div className="justify-self-start w-full p-4">
          <a href="/" className="btn btn-primary">
            戻る
          </a>
        </div>
        <div className="container mx-auto p-4 bg-white rounded-lg m-4">
          {microCMSItem.map((item) => (
            <div className="flex justify-center m-4" key={item.id}>
              <div className="bg-base-100 max-w-[800px]">
                <figure className="max-h-[500px] overflow-hidden">
                  <img src={item.thumbnail.url} alt={item.title} />
                </figure>
                <div>
                  <h2 className="text-2xl font-bold text-center">
                    {item.title}
                    <span className="ml-4">
                      （{item.date &&
                        new Date(item.date).toLocaleDateString("ja-JP")}
                    </span>）
                  </h2>
                </div>
                <div className="text-lg font-medium mt-6 mb-4">
                  {item.body.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
