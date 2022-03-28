import { Layout } from "antd";
import React from "react";
import WeatherCard from "./WeatherCard";
const { Content } = Layout;
const Container = ({ title, card }) => {
  return (
    <Layout className="layout">
      <h1 className="heading">{title}</h1>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <WeatherCard renderedCard={card} />
        </div>
      </Content>
    </Layout>
  );
};

export default Container;
