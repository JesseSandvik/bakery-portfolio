import { useState } from "react";

import Button from "../../components/atoms/button/Button";
import Heading from "../../components/atoms/heading/Heading";
import Image from "../../components/atoms/image/Image";

import RedSportsCake from "../../images/cake-sports-red.jpg";
import TiffanyCake from "../../images/cake-tiffany.jpg";

function Gallery() {
  const [currentView, setCurrentView] = useState("");
  return (
    <main id="gallery">
      <div>
        <Heading level="2">view our gallery</Heading>
        <ul>
          <li>
            <Button onClick={() => console.log("click")}>
              <i className="fa-solid fa-chevron-left" />
            </Button>
          </li>
          <li>
            <Image alt="A Tiffancy & Co. Themed Cake" src={TiffanyCake} />
          </li>
          <li className="active">
            <Image
              alt="A Sports Themed Red And White Cake"
              src={RedSportsCake}
            />
          </li>
          <li>
            <Image alt="A Tiffancy & Co. Themed Cake" src={TiffanyCake} />
          </li>
          <li>
            <Button onClick={() => console.log("click")}>
              <i className="fa-solid fa-chevron-right" />
            </Button>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Gallery;
