import { Container, Row, Image, Button } from "react-bootstrap";

const TbcxUsaidFirstpage = () => {
  const img = require("../images/main-background/main-background.jpg");
  return (
    <div className="first-page-main-top">
      <Container fluid>
        <Row className="relative d-flex align-items-center justify-content-center tbcxusaid-top">
          <Image className="px-0 h-100 tbcxusaid-top-image" src={img} />
          <div className="text-on-main-image absolute px-0 width-80">
            <h1 className="lh-base fw-bold ">
              TBC x USAID
              <br />
              ᲢᲔᲥᲜᲝᲚᲝᲒᲘᲣᲠᲘ ᲒᲐᲜᲐᲗᲚᲔᲑᲘᲡᲗᲕᲘᲡ
            </h1>
          </div>
        </Row>
        <Row className="text-below-main-image width-80 mx-auto my-5">
          <h1 className="lh-base fs-2 text-break">
            „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა საინფორმაციო
            ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად დაფინანსებულ
            ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს სხვადასხვა ICT
            მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა
            დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.
          </h1>
          <div>
            <Button variant="link" size="lg" className="text-decoration-none my-5">
              გაიგე მეტი
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default TbcxUsaidFirstpage;
