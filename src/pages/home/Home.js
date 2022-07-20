import Button from "../../components/atoms/button/Button";
import Heading from "../../components/atoms/heading/Heading";
import Image from "../../components/atoms/image/Image";
import Paragraph from "../../components/atoms/paragraph/Paragraph";
import WhiteCake from "../../images/cake-white.jpg";

function Home() {
  return (
    <main>
      <div id="summary">
        <Heading id="phrase" level="2">
          experience the magic
        </Heading>
        <Paragraph>of our</Paragraph>
        <Heading level="2">
          custom handmade <span>cakes</span>, <span>cookies</span> &{" "}
          <span>pies</span>
        </Heading>
        <Heading level="3">prepared fresh from our kitchen</Heading>
        <Heading level="2">delivered straight to your doorstep!</Heading>
        <span id="btn-group">
          <Button className="btn-primary">view our menu</Button>
          <Button className="btn-secondary">view custom order options</Button>
        </span>
      </div>
      <div className="container">
        <Heading level="3">now serving nassau & suffolk county!</Heading>
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
