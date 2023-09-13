import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import dog from "../../assets/dog.jpg";
import "./News.css";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
    return () => {};
  }, []);

  async function getArticles() {
    const options = {
      headers: {
        "X-RapidAPI-Key": "b9f377de43msh10628aacb321df0p1be870jsn29f9c84e4616",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };
    const { data } = await axios.get(
      "https://mmo-games.p.rapidapi.com/latestnews",
      options
    );
    console.log(data);
    setArticles(data);
  }

  return (
    <section id="news">
      <div className="banner mb-4">
        <img src={dog} />
        <div className="overlay"></div>
        <div className="mb-5">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse illum
            quidem qui distinctio nisi, maiores modi beatae a iste est.
          </p>
        </div>
      </div>
      <Container>
        <Row className="gy-4">
          {articles.map((article, index) => {
            return (
              <Col sm={6} key={index}>
                <a href={article.article_url} target="_blank">
                  <div className="news-item p-4">
                    <div className="news-text">
                      <h3>{article.title}</h3>
                      <p>{article.short_description}</p>
                    </div>
                    <img src={article.thumbnail} />
                    <div className="overlay"></div>
                  </div>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default News;
