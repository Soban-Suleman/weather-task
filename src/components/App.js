import React, { useEffect, useState } from "react";
import "../App.css";
import { Layout, Card, Col, Image } from "antd";
import sun from "../assets/images/sun.png";
import WeatherCard from "./WeatherCard";
import axios from "axios";
const { Content, Footer } = Layout;

const App = () => {
  const [data, setData] = useState();
  const getWeatherData = async () => {
    const weather_data = await axios.get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=31.5204&lon=74.3587&appid=1d96f8cb9b1bb2bff731ba3e106372c0&exclude=minutely,alerts&units=metric"
    );
    if (weather_data.status === 200) {
      console.log(weather_data.data);
      setData(weather_data.data);
    }
  };
  useEffect(() => {
    getWeatherData();
    return;
  }, []);

  const renderedDailyDataCard = data?.daily?.slice(0, -1).map((d, index) => {
    let day;
    day = new Date(d.dt * 1000).toLocaleDateString("en", {
      weekday: "short",
    });

    return (
      <Col span={3} key={`${index}`}>
        <Card style={{ textAlign: "center", borderRadius: "14px" }}>
          <h2>{day}</h2>
          <Image src={sun} alt="sun_img" preview={false} />
          <h2>{Math.round(d.temp.day)}°</h2>
        </Card>
      </Col>
    );
  });
  const renderedHourlyDataCard = data?.hourly?.slice(0, 7).map((d, index) => {
    let day;
    day = new Date(d.dt * 1000).toLocaleTimeString("en", {
      weekday: "short",
    });
    day = new Date(d.dt * 1000)
      .toLocaleTimeString([], { hour12: true, hour: "2-digit" }, "en-US")
      .replace(/^0+/, "");
    return (
      <Col span={3} key={`${index}`}>
        <Card style={{ textAlign: "center", borderRadius: "14px" }}>
          <h2>{day}</h2>
          <Image src={sun} alt="sun_img" preview={false} />
          <h2>{Math.round(d.temp)}°</h2>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <Layout className="layout">
        <h1 className="heading">Weekly Weather Data</h1>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <WeatherCard renderedCard={renderedDailyDataCard} />
          </div>
        </Content>
      </Layout>
      <Layout className="layout">
        <h1 className="heading">Today's Weather Data</h1>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <WeatherCard renderedCard={renderedHourlyDataCard} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Data Fetched Using Openweather API
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
