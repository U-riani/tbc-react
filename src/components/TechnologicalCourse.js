import { Button, Card, Col, Container, Row } from "react-bootstrap";

const TechnologicalCourse = () => {
  const cardsInfo = [
    {
      src: require("../images/cards-images/image-1.jpg"),
      name: "IOS Development",
      titile: "რეგისტრაცია დასრულებულია",
      id: 1,
    },
    {
      src: require("../images/cards-images/image-2.jpg"),
      name: "React",
      titile: "რეგისტრაცია დასრულებულია",
      id: 2,
    },
    {
      src: require("../images/cards-images/image-3.jpg"),
      name: "Intro to Python",
      titile: "რეგისტრაცია დასრულებულია",
      id: 3,
    },
    {
      src: require("../images/cards-images/image-4.jpg"),
      name: "Advanced Python",
      titile: "რეგისტრაცია დასრულებულია",
      id: 4,
    },
    {
      src: require("../images/cards-images/image-5.jpg"),
      name: "Advanced Cubersecurity Course",
      titile: "რეგისტრაცია დასრულებულია",
      id: 5,
    },
    {
      src: require("../images/cards-images/image-6.jpg"),
      name: "ToT - Trainig of Trainers",
      titile: "რეგისტრაცია დასრულებულია",
      id: 6,
    },
    {
      src: require("../images/cards-images/image-7.jpg"),
      name: "Blockchain",
      titile: "რეგისტრაცია დასრულებულია",
      id: 7,
    },
    {
      src: require("../images/cards-images/image-8.jpg"),
      name: "DevOps",
      titile: "რეგისტრაცია დასრულებულია",
      id: 8,
    },
    {
      src: require("../images/cards-images/image-9.jpg"),
      name: "Information Security Governance",
      titile: "რეგისტრაცია დასრულებულია",
      id: 9,
    },
  ];
  return (
    <div className="Technological-course">
      <Container fluid className="width-80">
        <h2 className="my-5">სასწავლო კურსები</h2>
        <Row>
          {cardsInfo.map((data) => {
            return (
              <Col lg={4} key={data.id} className="my-3">
                <Card className="technological-course-cards">
                  <div className="card-top">
                    <Card.Img variant="top" src={data.src} />
                    <Card.Body className="px-0 ms-4">
                      <Card.Title className="text-light mt-4">
                        {data.name}
                      </Card.Title>
                      <Card.Text className="text-light  mt-4">
                        {data.titile}
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div className="cars-button">
                    <Button variant="link" className="text-decoration-none ps-0 ms-4 mb-3">
                      <i className="fa-solid fa-arrow-right"></i> კურსის
                      დეტალები
                    </Button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TechnologicalCourse;
