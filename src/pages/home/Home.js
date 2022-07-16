import Heading from "../../components/atoms/heading/Heading";
import Image from "../../components/atoms/image/Image";
import HomepageBanner from "../../images/banner-homepage.png";

function Home() {
  return (
    <main>
      <Heading level="2">experience the magic...</Heading>
      <div id="image-carousel">
        <Image
          src={HomepageBanner}
          alt="A collection of Stacy's cake sample images."
        />
      </div>
    </main>
  );
}

export default Home;
