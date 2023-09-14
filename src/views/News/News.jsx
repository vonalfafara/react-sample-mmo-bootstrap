import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import dog from "../../assets/dog.jpg";
import "./News.css";
import http from "../../lib/http";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
    return () => {};
  }, []);

  async function getArticles() {
    const { data } = await http.get("/latestnews");
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
