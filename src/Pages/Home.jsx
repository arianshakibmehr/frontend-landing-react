import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";

import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";

import ServiceList from "../services/ServiceList";

import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"بهتره که قبل رفتن بدونی"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  <span className="highlight"> سوئیس </span>
                  هرگز اینقدر مقرون به صرفه نبوده است
                </h1>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">چه کاری دقیقا انجام میدیم؟</h5>
              <h2 className="services__title">
                الایترا همیشه بهترین راه هارو داره!
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Tour Section Start */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"گشت و گذار"} />
              <h2 className="featured__tour-title">ویژگی تور ها</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Tour Section End */}
    </>
  );
};

export default Home;
