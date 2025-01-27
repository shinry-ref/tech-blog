import React from "react";
import { MicroCMS } from "../types/microCMS";

type Props = {
  item: MicroCMS;
};


const MicroCmsCard = ({ item }: Props) => {
  return (
    <div className="flex justify-center m-4" key={item.id}>
      <div className="card bg-base-100 max-w-96 shadow-xl">
        <figure>
          <img src={item.thumbnail.url} alt={item.title} data-testid="thumbnail" />
        </figure>
        <div className="card-body">
          <h2 className="card-title" data-testid="title">{item.title}</h2>
          <div className="card-actions justify-end">
            <a href={`blogs/${item.id}`} className="btn btn-primary" data-testid="next-button">
              記事を見る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroCmsCard;
