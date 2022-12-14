import React, { useState, useEffect } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Articles = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 5000);
  }, []);

  return (
    <div className="">
      <h2 className="mb-5 p-3 text-[25px] font-bold">Articles</h2>
      <hr />
      {articles &&
        articles.map((article) => (
          <div className="" key={article.id}>
            <h3 className="font-bold text-[20px] p-1 mb-1">{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles && [1, 2, 3, 4, 5].map((id) => <SkeletonArticle key={id} />)}
    </div>
  );
};
export default Articles;
