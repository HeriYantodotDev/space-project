import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0" }}>
        This is a fun project website and part of @HeriYantodotDev 's learning journey. 
        No affiliation at all with NASA or SPACEX.
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
