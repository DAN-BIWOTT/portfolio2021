import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(https://raw.githubusercontent.com/DAN-BIWOTT/portfolio2021/904759d0a3366ba03b2de099778252872fdfd580/src/Assets/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/DAN-BIWOTT/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Biwott
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
