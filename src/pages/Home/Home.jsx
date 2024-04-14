import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import "../../main.scss";
import Lottie from "react-lottie";
import aboutMeAnimation from "../../assets/lottie-animations/about-me.json";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import html from "../../assets/images/tech-stack/front-end/html.webp";
import css from "../../assets/images/tech-stack/front-end/css.webp";
import javascript from "../../assets/images/tech-stack/front-end/javascript.webp";
import react from "../../assets/images/tech-stack/front-end/react.webp";
import redux from "../../assets/images/tech-stack/front-end/redux.webp";
import saas from "../../assets/images/tech-stack/front-end/saas.webp";
import hibernate from "../../assets/images/tech-stack/back-end/hibernate.webp";
import java from "../../assets/images/tech-stack/back-end/java.webp";
import maven from "../../assets/images/tech-stack/back-end/maven.webp";
import mongo from "../../assets/images/tech-stack/back-end/mongo.webp";
import mysql from "../../assets/images/tech-stack/back-end/my-sql.webp";
import springboot from "../../assets/images/tech-stack/back-end/spring-boot.webp";
import swagger from "../../assets/images/tech-stack/back-end/swagger.webp";
import dsa from "../../assets/images/tech-stack/other-skills/dsa.webp";
import flutterflow from "../../assets/images/tech-stack/other-skills/flutter-flow.webp";
import github from "../../assets/images/tech-stack/other-skills/github.webp";
import gitlab from "../../assets/images/tech-stack/other-skills/gitlab.webp";
import postman from "../../assets/images/tech-stack/other-skills/postman.webp";
import tomcat from "../../assets/images/tech-stack/other-skills/tomcat.webp";
import wordpress from "../../assets/images/tech-stack/other-skills/wordpress.webp";
import { Chrono } from "react-chrono";
const HomePage = () => {
  const frontEnd = [
    {
      title: "HTML",
      img: html,
    },
    {
      title: "CSS",
      img: css,
    },
    {
      title: "Javascipt",
      img: javascript,
    },
    {
      title: "React JS",
      img: react,
    },
    {
      title: "Redux",
      img: redux,
    },
    {
      title: "Saas",
      img: saas,
    },
  ];
  const backEnd = [
    {
      title: "Java",
      img: java,
    },
    {
      title: "Spring Boot",
      img: springboot,
    },
    {
      title: "Hibernate",
      img: hibernate,
    },
    {
      title: "Maven",
      img: maven,
    },
    {
      title: "My SQL",
      img: mysql,
    },
    {
      title: "Mongo",
      img: mongo,
    },
    {
      title: "Swagger",
      img: swagger,
    },
  ];
  const otherSkills = [
    {
      title: "DSA",
      img: dsa,
    },
    {
      title: "GitHub",
      img: github,
    },
    {
      title: "Flutter Flow",
      img: flutterflow,
    },
    {
      title: "Git Lab",
      img: gitlab,
    },
    {
      title: "Postman",
      img: postman,
    },
    {
      title: "Wordpress",
      img: wordpress,
    },
    {
      title: "Tomcat",
      img: tomcat,
    },
  ];

  const items = [
    {
      title: "Oct 2023 - Present",
      cardTitle: "Software Engineer 1",
      cardSubtitle: "Ideal Tech Labs",
      cardTitleStyle: { marginLeft: "20px" },
      items: [
        {
          cardTitle: "Accounts Guru",
          cardSubtitle: "Node Js, Flutter, Flutter Flow",
          cardDetailedText: [
            "Implemented a Bulk Upload feature using Node.js to facilitate the seamless uploading of extensive lists of vendors through Excel sheets. This enhancement streamlined the process of managing large volumes of vendor data, enhancing efficiency and scalability within the system.",
            "Crafted the Accounts Guru mobile app with FlutterFlow, empowering users to effortlessly manage assets and expenses. Integrated robust login features to safeguard data and streamline access, enhancing usability and security.",
          ],
        },
        {
          cardTitle: "Azidus",
          cardSubtitle: "Java, Springboot, Hibernate, MySQL",
          cardDetailedText: [
            "Offered technical support for the Azidus project, using Java and Spring Boot to fix bugs and ensure smooth operations. Worked closely with the development team to optimize system performance and contribute to project success.",
          ],
        },
      ],
    },
    {
      title: "Apr 2023 - Sep 2023",
      cardTitle: "Software Developer Trainee",
      cardSubtitle: "Ideal Tech Labs",
      cardTitleStyle: { marginLeft: "20px" },
      items: [
        {
          cardTitle: "Book My Xperience",
          cardSubtitle: "Java, Springboot, Hibernate, MongoDB",
          cardDetailedText: [
            "Introduced a highly efficient Bulk Upload feature for experiences via Excel, resulting in a substantial increase in administrative productivity.",
            "Successfully rectified critical bugs and significantly enhanced the code quality of the BookMyXperience website using Java Spring Boot and Hibernate.",
          ],
        },
        {
          cardTitle: "Java Development Training Project",
          cardSubtitle:
            "Java, Springboot, Hibernate, MongoDB, JWT(Json Web Token)",
          cardDetailedText: [
            "Successfully implemented a proof-of-concept for JWT authentication, showcasing proficiency in security implementation and adding valuable functionality to the project.",
            "Completed rigorous training in Java Spring Boot and Hibernate, effectively applying theoretical knowledge to develop a full CRUD system for tourist experiences, demonstrating practical skills in software development.",
          ],
        },
      ],
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutMeAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="info">
          <div className="about-me">
            <div className="about-me-content">
              <h1>About me</h1>
              <span className="about-me-span">
                As a software developer, I believe in the power of simplicity.
                Whether it's troubleshooting bugs or implementing new features,
                I approach each task with a focus on clarity and precision. My
                journey in software development has equipped me with a diverse
                skill set and a passion for crafting elegant solutions to
                complex problems. Let's team up and create something remarkable
                together!
              </span>
            </div>
            <div className="lottie-content">
              <span className="lottie-span">
                <Lottie
                  options={defaultOptions}
                  eventListeners={[
                    {
                      eventName: "load",
                      callback: () => handleMainAnimationLoad(true),
                    },
                  ]}
                />
              </span>
            </div>
          </div>
          <div className="skills-section">
            <div>
              <h1>Skills</h1>
            </div>
            <div
              className="technologies"
              style={{
                justifyContent: "space-around",
                display: "flex",
              }}
            >
              <span>
                <h2 className="text-lg font-bold mb-4">Frontend Skills</h2>
                <span className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {frontEnd.map((item, index) => (
                    <Card
                      shadow="sm"
                      key={index}
                      isPressable
                      onPress={() => console.log("item pressed")}
                      className="card"
                      style={{ flex: "0 0 calc(25% - 0.5rem)" }}
                    >
                      <CardBody className="overflow-visible p-0">
                        <Image
                          shadow="sm"
                          radius="lg"
                          width="100%"
                          alt={item.title}
                          className="w-full object-cover h-[120px] p-10"
                          src={item.img}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </CardBody>
                      <CardFooter className="text-small justify-between">
                        <b>{item.title}</b>
                      </CardFooter>
                    </Card>
                  ))}
                </span>
              </span>
              <span>
                <h2 className="text-lg font-bold mb-4">Backend Skills</h2>
                <span className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {backEnd.map((item, index) => (
                    <Card
                      shadow="sm"
                      key={index}
                      isPressable
                      onPress={() => console.log("item pressed")}
                      className="card"
                      style={{ flex: "0 0 calc(25% - 0.5rem)" }}
                    >
                      <CardBody className="overflow-visible p-0">
                        <Image
                          shadow="sm"
                          radius="lg"
                          width="100%"
                          alt={item.title}
                          className="w-full object-cover h-[120px] p-10"
                          src={item.img}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </CardBody>
                      <CardFooter className="text-small justify-between">
                        <b>{item.title}</b>
                      </CardFooter>
                    </Card>
                  ))}
                </span>
              </span>
              <span>
                <h2 className="text-lg font-bold mb-4">Other Skills</h2>
                <span className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {otherSkills.map((item, index) => (
                    <Card
                      shadow="sm"
                      key={index}
                      isPressable
                      onPress={() => console.log("item pressed")}
                      className="card"
                      style={{ flex: "0 0 calc(25% - 0.5rem)" }}
                    >
                      <CardBody className="overflow-visible p-0">
                        <Image
                          shadow="sm"
                          radius="lg"
                          width="100%"
                          alt={item.title}
                          className="w-full object-cover h-[120px] p-10"
                          src={item.img}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </CardBody>
                      <CardFooter className="text-small justify-between">
                        <b>{item.title}</b>
                      </CardFooter>
                    </Card>
                  ))}
                </span>
              </span>
            </div>
            <div></div>
          </div>

          <div className="experience-section">
            <div>
              <h1>Experience</h1>
              <div style={{ width: "100%", overflow: "auto" }}>
                <Chrono
                  items={items}
                  theme={{
                    primary: "white",
                    secondary: "#0d7377",
                    cardSubtitleColor: "white",
                    cardDetailedTextColor: "white",
                    cardBgColor: "#212121",
                    nestedCardBgColor: "#323232",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                  fontSizes={{
                    cardSubtitle: "1rem",
                    cardText: "0.8rem",
                    cardTitle: "1rem",
                    title: "1rem",
                  }}
                  mode="VERTICAL"
                  className="chrono"
                  disableToolbar="false"
                  disableNav="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
