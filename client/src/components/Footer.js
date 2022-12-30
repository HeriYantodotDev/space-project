import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
        This website is not affiliated with NASA or SpaceX in any way. This part of the learning journey.
        @HeriYantodotDev
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
