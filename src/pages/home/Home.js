import Button from "../../components/atoms/button/Button";
import Heading from "../../components/atoms/heading/Heading";
import Paragraph from "../../components/atoms/paragraph/Paragraph";

function Home() {
  return (
    <main>
      <div id="summary">
        <Heading id="phrase" level="2">
          experience the magic
        </Heading>
        <Paragraph>of my</Paragraph>
        <Heading level="2">
          Custom handmade <span>cakes</span>, <span>cookies</span> &{" "}
          <span>pies</span>
        </Heading>
        <Heading level="3">prepared fresh from my kitchen</Heading>
        <Heading level="2">delivered straight to your doorstep!</Heading>
      </div>
      <Heading level="3">now serving nassau & suffolk county!</Heading>
      <div />
    </main>
  );
}

export default Home;
