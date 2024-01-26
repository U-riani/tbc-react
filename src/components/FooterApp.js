import { Button, Image } from "react-bootstrap";

const FooterApp = () => {
  ///
  const imagesData = {
    tbc: require("../images/footer-images/tbc-logo.jpg"),
    facebook: require("../images/footer-images/facebook.jpg"),
    youtube: require("../images/footer-images/youtube.jpg"),
  };
  return (
    <div className="footer width-80  pb-5">
      <div className="footer-container">
        <div className="foter-tbc-logo">
          <Image src={imagesData.tbc} />
        </div>
        <div className="footer-rights">
          <p className="text-light my-auto mb-4">
            © 2023 ყველა უფლება დაცულია
          </p>
        </div>
        <div className="footer-terms">
          <p className="text-light my-auto">წესები და პირობები</p>
        </div>

        <div className="footer-icons">
          <Image src={imagesData.facebook}/>

          <Image src={imagesData.youtube} />
        </div>
        <div className="footer-contact-button">
          <Button variant="info" className="button-contact text-light">
            მოგვწერეთ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FooterApp;
