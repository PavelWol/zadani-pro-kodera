import React from "react";
import styled from "styled-components";
import Header from "../src/components/Mobile/Header.js";
import List from "../src/components/Mobile/List.js";
import Tabs from "../src/components/Mobile/Tabs.js";
import Footer from "../src/components/Mobile/Footer.js";

import SideMenu from "../src/components/Desktop/SideMenu.js";
import Chart from "../src/components/Desktop/Chart.js";

// STYLES MOBILE

const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  background: darkgrey;
`;

const TabsSection = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height: 400px;
  overflow: auto;
  border: 1px solid lightgrey;
  padding: 16px 16px 0 16px;
`;

// STYLES DESKTOP

const WrapperD = styled.div`
  display: flex;
  padding-top: 40px;
  min-height: 100vh;
  background: #f7f7f7;
`;

const RightChart = styled.div`
  flex: 1;
`;

const ContainerH3 = styled.div`
  padding: 16px;
  border: 1px solid lightgrey;
  background: white;
`;

const HeadingH3 = styled.h3`
  margin: 0;
  font-size: 16px;
  font-family: Sans-serif;
`;

// /STYLES DESKTOP

// HTML

class MyApplication extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  UNSAFE_componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 1000;

    if (isMobile) {
      return (
        <Wrapper>
          <Header />
          <List />
          <TabsSection>
            <Tabs />
            <Tabs />
            <Tabs />
            <Tabs />
            <Tabs />
          </TabsSection>
          <Footer />
        </Wrapper>
      );
    } else {
      return (
        <WrapperD>
          <SideMenu />
          <RightChart>
            <ContainerH3>
              <HeadingH3>Seznam uživatelských účtů</HeadingH3>
            </ContainerH3>
            <Chart />
          </RightChart>
        </WrapperD>
      );
    }
  }
}

export default MyApplication;
