import { Carousel, Image, Container, Row, Col } from "react-bootstrap";

const ProjectPartners = () => {
  const logoData = [
    [
      {
        id: 1,
      },
      {
        name: "usaid",
        src: require("../images/carousel-images/usaid.jpg"),
      },
      {
        name: "space",
        src: require("../images/carousel-images/space.jpg"),
      },
      {
        name: "tinet",
        src: require("../images/carousel-images/tinet.jpg"),
      },
    ],

    [
      {
        id: 2,
      },
      {
        name: "tegeta",
        src: require("../images/carousel-images/tegeta.jpg"),
      },
      {
        name: "spectre",
        src: require("../images/carousel-images/spectre.jpg"),
      },
      {
        name: "tbc lizing",
        src: require("../images/carousel-images/tbclizing.jpg"),
      },
    ],

    [
      {
        id: 3,
      },
      {
        name: "ufc",
        src: require("../images/carousel-images/ufc.jpg"),
      },
    ],
  ];

  return (
    <div className="projects-partners my-5">
      <div className="partners-caption my-4">
        <h2>პროექტის პარტნიორები</h2>
      </div>
      <Carousel fade className="carousel">
        {logoData.map((data) => {
          return (
            <Carousel.Item key={data[0].id} className="">
              <Container className="carousel-images-container h-100">
                <Row
                  className="carousel-images-container-row d-flex justify-content-center"
                  id={data[0].id}
                >
                  {data.map((info, index) => {
                    return index > 0 ? (
                      <Col
                        lg={4}
                        key={info.name}
                        className="d-flex align-items-center px-5 my-2 carousel-image-container"
                      >
                        <Image src={info.src} className="carousel-image" />
                      </Col>
                    ) : null;
                  })}
                </Row>
              </Container>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProjectPartners;
