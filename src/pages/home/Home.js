import Button from "../../components/atoms/button/Button";
import ExternalLink from "../../components/atoms/externalLink/ExternalLink";
import Heading from "../../components/atoms/heading/Heading";
import Image from "../../components/atoms/image/Image";
import NavigationLink from "../../components/atoms/navLink/NavLink";
import Paragraph from "../../components/atoms/paragraph/Paragraph";
import Small from "../../components/atoms/small/Small";
import WhiteCake from "../../images/cake-white.jpg";

function Home() {
  return (
    <main id="home">
      <div id="summary">
        <Heading id="phrase" level="2">
          experience the magic
        </Heading>
        <Paragraph>of our</Paragraph>
        <Heading level="2">
          custom handmade <span>cakes</span>, <span>cupcakes</span>, &{" "}
          <span>treats</span>
        </Heading>
        <Heading level="3">prepared fresh from our kitchen,</Heading>
        <Heading level="2">delivered straight to your doorstep!</Heading>
        <span id="btn-group">
          <Button className="btn-primary">view our menu</Button>
          <Button className="btn-secondary">view custom options</Button>
        </span>
        <Small>
          Ready to order? Review our
          <NavigationLink to="/contact">
            {" "}
            booking policy & contact information
          </NavigationLink>
          .
        </Small>
      </div>
      <div className="container">
        <Heading level="3">now serving nassau & suffolk county!</Heading>
        <span id="social-icons">
          <ExternalLink href="mailto: stacyscakesny@gmai.com" title="Email">
            <i className="fa-solid fa-square-envelope" />
          </ExternalLink>
          <ExternalLink
            href="https://www.facebook.com/stacyscakesandcupcakes"
            title="Facebook"
          >
            <i className="fa-brands fa-facebook-square" />
          </ExternalLink>
          <ExternalLink
            href="https://www.instagram.com/stacyscakesny"
            title="Instagram"
          >
            <i className="fa-brands fa-instagram-square" />
          </ExternalLink>
        </span>
      </div>
      <div className="container-two">
        <Image
          alt="White ornate cake with white roses for decoration."
          src={WhiteCake}
        />
      </div>
    </main>
  );
}

export default Home;
