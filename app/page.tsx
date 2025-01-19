"use client";

import { useEffect, useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { QiitaBlog } from "./types/qiitaBlog";
import { client } from "./utils/client";
import { MicroCMS } from "./types/microCMS";

export default function Page() {
  const [qiitaItems, setQiitaItems] = useState<QiitaBlog[]>([]);
  const [microCMSItems, setMicroCMSItems] = useState<MicroCMS[]>([]);

  useEffect(() => {
    getQiita(4);
    getMicroCMS();
  }, []);

  const getQiita = async (page: number) => {
    const res = await fetch("api/qiita", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page }),
    });
    setQiitaItems(await res.json());
  };

  const getMicroCMS = async () => {
    const res = await client.get({
      endpoint: "blogs",
    });
    console.log(res);
    setMicroCMSItems(res.contents);
  }


  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto p-4 bg-white rounded-lg mb-4">
        <div className="grid grid-cols-4 gap-4">
          {qiitaItems.map((item) => (
            <div className="flex justify-center m-4" key={item.url}>
              <div className="card bg-base-100 max-w-96 shadow-xl">
                <figure>
                  <img
                    src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9SmF2YVNjcmlwdCVFMyU4MSVBN1VSTCVFMyU4MSU4QiVFMyU4MiU4OU9HUCVFNSU4RiU5NiVFNSVCRSU5NyVFMyU4MSU5OSVFMyU4MiU4QiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1jbGlwPWVsbGlwc2lzJnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NDM5YjY5NjY3Nzg3ZTExYzdmYTM2YjI1ZDg3NTcyN2Y&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwa3N5dW5ubm4mdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWUxMjJhOTA1NDdiNTMzNDI4MWY3YmU0M2U2Y2I1M2Rh&blend-x=142&blend-y=491&blend-mode=normal&s=1a611f7e8833ff640580434a1b03d27a"
                    alt={item.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div className="card-actions justify-end">
                    <a
                      href={item.url}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      記事を見る
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full p-4">
          <a href="/blogs" className="btn btn-primary">
            もっと見る <GrFormNext />
          </a>
        </div>
      </div>

      <div className="container mx-auto p-4 bg-white rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          {microCMSItems.map((item) => (
            <div className="flex justify-center m-4" key={item.url}>
              <div className="card bg-base-100 max-w-96 shadow-xl">
                <figure>
                  <img
                    src={item.thumbnail.url}
                    alt={item.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div className="card-actions justify-end">
                    <a
                      href={item.url}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      記事を見る
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
