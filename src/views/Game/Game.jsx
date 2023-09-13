import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Game.css";
import { Container, Carousel } from "react-bootstrap";

const Game = () => {
  const [game, setGame] = useState({});
  const [isGameFetched, setIsGameFetched] = useState(false);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    getGame(params.gameId);
  }, []);

  async function getGame(id) {
    const options = {
      headers: {
        "X-RapidAPI-Key": "b9f377de43msh10628aacb321df0p1be870jsn29f9c84e4616",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };
    const { data } = await axios.get(
      "https://mmo-games.p.rapidapi.com/game?id=" + id,
      options
    );
    setGame(data);
    setIsGameFetched(true);
  }
  return (
    <section id="game">
      {isGameFetched ? (
        <>
          <div className="banner">
            <img src={game.thumbnail} alt="" />
          </div>
          <Container className="mt-4">
            <div className="text-center mb-4">
              <h1>{game.title}</h1>
              <h3>{game.short_description}</h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: game.description }}></div>
            <p>
              Visit the game website here:{" "}
              <a href={game.game_url} target="_blank">
                {game.title}
              </a>
            </p>
            <Carousel>
              {game.screenshots.map((image, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img src={image.image} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Container>
        </>
      ) : (
        <h3>Loading</h3>
      )}
    </section>
  );
};

export default Game;
