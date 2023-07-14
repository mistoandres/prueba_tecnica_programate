import "./App.css";
import "./reset.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "./Header";
import Sear from "./serch-input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [array, setArray] = useState([]);
  const busqueda = useSelector((state) => state.states.input);

  useEffect(() => {
    if (busqueda != "") {
      const url2 =
        "https://www.superheroapi.com/api.php/10227050996959862/search/" +
        busqueda;
      fetch(url2)
        .then((response) => response.json())
        .then((data) => {
          setArray(data.results);
        });
    } else {
      setArray([]);
      for (let i = 0; i < 731; i++) {
        const url1 =
          "https://superheroapi.com/api/10227050996959862/" + (i + 1);
        fetch(url1)
          .then((response) => response.json())
          .then((data) => {
            setArray((current) => [...current, data]);
          });
      }
    }
  }, [busqueda]);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Sear />
        <Container>
          <Row xs={1} md={4} className="g-4">
            {array?.map((user) => {
              return (
                <Col key={user.id}>
                  <Card className="bg-card">
                    <Card.Img
                      variant="top"
                      src={user.image.url}
                      className="card-img"
                    />
                    <hr className="m-0" />
                    <Card.Body className="text-light">
                      <Card.Title>{user.name}</Card.Title>
                      <Card.Text>
                        <h6>Powerstats</h6>
                        <ol>
                          <li>Intelligence: {user.powerstats.intelligence}</li>
                          <li>Strength: {user.powerstats.strength}</li>
                          <li>Speed: {user.powerstats.speed}</li>
                          <li>Durability: {user.powerstats.durability}</li>
                          <li>Power: {user.powerstats.power}</li>
                          <li>Combat: {user.powerstats.combat}</li>
                        </ol>
                        <h6>Apperance</h6>
                        <ol>
                          <li>Gender: {user.appearance.gender}</li>
                          <li>Race: {user.appearance.race}</li>
                          <li>Height: {user.appearance.height}</li>
                          <li>Weight: {user.appearance.weight}</li>
                          <li>Eye color: {user.appearance.eye_color}</li>
                          <li>Hair color: {user.appearance.hair_color}</li>
                        </ol>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default Home;
