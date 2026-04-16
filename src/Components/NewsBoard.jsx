import { useEffect, useState } from "react";//useState stores data //useEffect calls api
import NewsItem from "./NewsItem";//Each news article will be displayed using this component

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setArticles(data.articles || []);
      });

  }, [category]); 

  return (
    <div className="shadow-sm text-center mb-4 fw-bold" >
      <h2 className="text-center container py-4">
        Latest <span className="badge bg-danger px-3 py-2">News</span>
      </h2>
    <div className="row g-4">
      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}</div>
    </div>
  );
};

export default NewsBoard;
