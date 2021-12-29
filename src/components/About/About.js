import React from "react";
import { stackList } from "../../data/ProjectData";
import dp from "../../Assets/dp.png";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={dp}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            My name is <strong>Kibiwott Dan </strong> 
            I'm a full-stack web developer with 6+ years experience, 
            back-end mobile developer with 3+ years experience and 
            a block-chain smart contract developer with 2+ years experience.
            Programming is a talent on my part.
          </div>
          <div className="AboutBio tagline2">
            These are the Technologies I major in
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
            <a href="https://icons8.com/icon/zdI5E8moxhs-/graphql">Icons by Icons8</a>
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
