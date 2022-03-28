import React from "react";
import { Row } from "antd";

const WeatherCard = ({ renderedCard }) => {
  return (
    <div>
      <Row gutter={16} style={{ justifyContent: "center" }}>
        {renderedCard}
      </Row>
    </div>
  );
};

export default WeatherCard;
