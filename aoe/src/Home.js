import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { NewsList } from "./components/NewsList";
import { BottomSet } from "./components/BottomSet";
import * as FadeIn from "./components/FadeIn";
import TitleMainDeco from "./assets/TitleMainDeco.svg";
import TitleHalfCircle from "./assets/TitleHalfCircle.svg";
import ScrollIcon from "./assets/ScrollIcon.svg";
import Slider_1 from "./assets/Slider_1.png";
import Slider_2 from "./assets/Slider_2.png";
import Slider_3 from "./assets/Slider_3.png";
import IntroPic_1 from "./assets/IntroPic_1.png";
import IntroPic_2 from "./assets/IntroPic_2.png";
import IntroPic_3 from "./assets/IntroPic_3.png";
import Takeout from "./assets/Takeout.svg";
import TakeoutDeco from "./assets/TakeoutDeco.svg";
import PointCard from "./assets/PointCard.svg";
import PointCardDeco from "./assets/PointCardDeco.svg";

import { IconContext } from "react-icons";
import { FaShoppingBag } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";

export const Home = () => (
  <Container fluid={true} className="ForBicScreen">
    <Row className="Title">
      <Col sm>
        <FadeIn.Left>
          <div className="d-none d-sm-block">
            <Image
              className="TitleHalfCircle"
              src={TitleHalfCircle}
              alt="HalfCircle"
              fluid
            />
          </div>
        </FadeIn.Left>
      </Col>
      <Col sm className="TitleDeco">
        <FadeIn.Down>
          <Image src={TitleMainDeco} alt="MainDeco" fluid />
        </FadeIn.Down>
      </Col>
      <Col sm className="ScrollSec d-none d-sm-block">
        <HashLink smooth to="#takeout">
          <div className="TakeoutTop">
            <IconContext.Provider value={{ color: "white", size: "17%" }}>
              <FaShoppingBag style={{ paddingTop: "12px" }} />
            </IconContext.Provider>
            <p className="TakeoutText">Takeout</p>
          </div>
        </HashLink>
        <Link to="/rent">
          <div className="HanamiTop">
            <IconContext.Provider value={{ color: "white", size: "20%" }}>
              <GiFruitTree style={{ paddingTop: "10px" }} />
            </IconContext.Provider>
            <p className="HanamiText">お持ち帰り</p>
          </div>
        </Link>
        <Image className="Scroll" src={ScrollIcon} alt="ScrollIcon" fluid />
      </Col>
    </Row>

    {/* This line in order for Mobile */}
    <Row className="MobileTakeout  d-block d-sm-none">
      <Col className="ScrollSec">
        <HashLink smooth to="#takeout">
          <div className="MobileTakeoutSec">
            <IconContext.Provider value={{ color: "white", size: "40px" }}>
              <FaShoppingBag />
            </IconContext.Provider>
            <p className="TakeoutTextM">Takeout</p>
          </div>
        </HashLink>
      </Col>
    </Row>
    <Row className="MobileHanami  d-block d-sm-none">
      <Col className="ScrollSec">
        <Link to="/rent">
          <div className="MobileTakeoutSec">
            <IconContext.Provider value={{ color: "white", size: "45px" }}>
              <GiFruitTree />
            </IconContext.Provider>
            <p className="HanamiTextM">お持ち帰り</p>
          </div>
        </Link>
      </Col>
    </Row>

    <Container fluid className="CarouselBg  d-none d-sm-block">
      <Row>
        <Col sm={6} className="CarouselCap">
          <div className="CarouselText">
            <p>六 十 年 守 り 続 け た</p>
            <p>味 を そ の ま ま に</p>
            <p>昔 か ら 変 わ ら ぬ</p>
            <p>伝 統 の 味 を 届 け る 為 に</p>
            <p>そ し て こ れ か ら も 。</p>
          </div>
        </Col>
        <Col sm={6}>
          <Carousel className="CarouselShadow">
            <Carousel.Item>
              <Image
                className="d-block w-100 CarouselPic"
                src={Slider_1}
                alt="First slide"
                rounded
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100 CarouselPic"
                src={Slider_2}
                alt="Second slide"
                rounded
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100 CarouselPic"
                src={Slider_3}
                alt="Third slide"
                rounded
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>

    <Row className="IntroSecTop">
      <Col md={{ span: 10, offset: 1 }}>
        <Row className="IntroInsideSec" xs={1} md={2}>
          <Col>
            <FadeIn.Left>
              <Image className="IntroPic" src={IntroPic_1} rounded />
            </FadeIn.Left>
          </Col>

          <Col className="IntroCaption">
            <div className="IntroCaption2">
              <h2 className="IntroCaptionTitle1">
                受け継がれる<h2 className="br_TopPage">秘伝のタレ</h2>
              </h2>
              <p className="IntroCaptionP">
                ダルマのタレは、10種類以上の厳選された素材を独自の製法でブレンドした、秘伝の味。
                創業から変わらず、
                守り続けているタレはコクと甘みのある深い味わいになっています。
                焼肉の味を引き立たせることはもちろん、
                幅広い年齢層の方に美味しく召し上がって頂けます。
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row className="IntroSec">
      <Col md={{ span: 10, offset: 1 }}>
        <Row className="IntroInsideSec" xs={1} md={2}>
          <Col className="IntroCaption"  xs={{ order: 12 }} md={{ order: 1 }}>
            <div className="IntroCaption2">
              <h2 className="IntroCaptionTitle2">豊富なサイドメニュー</h2>
              <p className="IntroCaptionP">
                多彩なサイドメニューは、こだわりの手作り。ダルマ開店当時の人気メニュー「ホルモンうどん焼き」から好評の豆腐チゲ、
                キムチチゲなどおいしい一品が勢揃い。サラダやデザートも充実しているのでお子様にも女性にも喜ばれています。
              </p>
            </div> 
          </Col>

          <Col xs={{ order: 1 }} md={{ order: 12 }}>
            <FadeIn.Right>
              <Image className="IntroPic" src={IntroPic_2} rounded />
            </FadeIn.Right>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row className="IntroSecBottom">
      <Col md={{ span: 10, offset: 1 }}>
        <Row className="IntroInsideSec" xs={1} md={2}>
          <Col>
            <FadeIn.Left>
              <Image className="IntroPic" src={IntroPic_3} rounded />
            </FadeIn.Left>
          </Col>
          <Col className="IntroCaption">
            <div className="IntroCaption2">
              <h2 className="IntroCaptionTitle2">ボリューム満点のお肉</h2>
              <p className="IntroCaptionP">
                ダルマのお肉はおいしくて、ボリューム満点
                食肉業者直売だから実現したこのボリューム！この価格！
                お腹いっぱい新鮮なお肉を楽しんで頂く為、スタッフ一同
                日々お客様の為に精進しています。
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>

    <Container fluid className="NewsBg">
      <Row className="NewsTitle">
        <Col md={{ span: 2, offset: 5 }}>
          <p className="NewsTitleFlashing">News</p>
          <p>新着情報</p>
        </Col>
      </Row>
      <NewsList />
    </Container>

    <Row className="bg">
      <Col md={{ span: 10, offset: 1 }}>
        <Row className="Point" xs={1} md={2}>
          <Col xs={6} md={4}>
            <FadeIn.Up>
              <Image
                className="PointDeco d-none d-sm-block"
                src={PointCardDeco}
                alt="PointCardDeco"
                fluid
              />
            </FadeIn.Up>
          </Col>
          <Col xs={12} md={8}>
            <FadeIn.Up>
              <Image
                className="PointBtn"
                src={PointCard}
                alt="PointCard"
                fluid
              />
            </FadeIn.Up>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col md={{ span: 10, offset: 1 }} id="takeout">
        <Row className="Takeout" xs={1} md={2}>
          <Col xs={12} md={8}>
            <FadeIn.Up>
              <a href={require("./assets/Document.pdf")} target="_blank">
                <Image
                  className="TakeoutBtn"
                  src={Takeout}
                  alt="Takeout"
                  ontouchstart=""
                  fluid
                />
              </a>
            </FadeIn.Up>
          </Col>
          <Col xs={6} md={4}>
            <Image
              className="TakeoutDeco d-none d-sm-block"
              src={TakeoutDeco}
              alt="TakeoutDeco"
              fluid
            />
          </Col>
        </Row>
      </Col>
    </Row>

    <BottomSet />
  </Container>
);
