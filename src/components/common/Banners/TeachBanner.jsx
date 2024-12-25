import React from "react";
import "./banner.scss";
import AwsIcon from "../../../assets/icons/aws";
import HtmlIcon from "../../../assets/icons/html";
import NodeJS from "../../../assets/icons/nodejs";
import CssIcon from "../../../assets/icons/css";
import NestJsIcon from "../../../assets/icons/nestjs";
import ExpressJsIcon from "../../../assets/icons/express";
import DynamoDb from "../../../assets/icons/dynamodb";
import MySqlIcon from "../../../assets/icons/mysql";
import TypeScriptIcon from "../../../assets/icons/typescript";
import JavaScriptIcon from "../../../assets/icons/javascript";

const TeachBanner = () => {
  const skillsTypes = ["FRONT-END", "BACKEND", "DATABASE"];
  const frontEnd = [
    {
      id: 1,
      img: <AwsIcon size={120} color={"#000000"} />,
      name: "",
      type: "BACKEND",
    },
    {
      id: 2,
      img: <HtmlIcon size={120} color={"#000000"} />,
      name: "",
      type: "FRONT-END",
    },
    {
      id: 3,
      img: <NodeJS size={120} color={"#000000"} />,
      name: "",
      type: "BACKEND",
    },
    {
      id: 4,
      img: <CssIcon size={120} color={"#000000"} />,
      name: "",
      type: "FRONT-END",
    },
    {
      id: 5,
      img: <NestJsIcon size={120} color={"#000000"} />,
      name: "",
      type: "BACKEND",
    },
    {
      id: 6,
      img: <ExpressJsIcon size={120} color={"#000000"} />,
      name: "",
      type: "BACKEND",
    },
    {
      id: 7,
      img: <DynamoDb size={120} color={"#000000"} />,
      name: "",
      type: "DATABASE",
    },
    {
      id: 8,
      img: <MySqlIcon size={120} color={"#000000"} />,
      name: "",
      type: "DATABASE",
    },
    {
      id: 1,
      img: <TypeScriptIcon size={120} color={"#000000"} />,
      name: "",
      type: "BACKEND",
    },
    {
      id: 1,
      img: <TypeScriptIcon size={120} color={"#000000"} />,
      name: "",
      type: "FRONT-END",
    },
    {
      id: 1,
      img: <JavaScriptIcon size={120} color={"#000000"} />,
      name: "",
      type: "BACKEND",
    },
    {
      id: 1,
      img: <JavaScriptIcon size={120} color={"#000000"} />,
      name: "",
      type: "FRONT-END",
    },
  ];
  return (
    <section id="banner" className="me-5">
      <div className="banner-header">
        <h2>My Skills</h2>
      </div>
      <div className="banner-items-area">
        {skillsTypes.map((items) => (
          <div className="item-area">
            <div className="item-name">{items}</div>
            <div className="item-icons">
              {frontEnd
                .filter((item) => item.type === items)
                .map((item) => (
                  <div key={item.id} className="box-icon">
                    {item.img}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeachBanner;
