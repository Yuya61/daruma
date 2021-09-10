import React from "react";
import { Row, Col, Image, ListGroup, Tab, TabContent } from "react-bootstrap";
import styled from "styled-components";
import Calender from "../assets/Calender_golden_week.svg";

const Styles = styled.div`
  .NewsSec {
    font-family: "Noto Serif JP", serif;
    color: #f3f0db;
  }

  .Tab {
    margin: 6%;
  }

  .TabFrame {
    border: 5px solid #fff;
    border-radius: 15px;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
    background-color: #007bff;
  }

  .TabContent {
    margin: 8%;
  }

  .title {
    color: #f3f0db;
    padding-bottom: 5%;
  }

  .br {
    white-space: pre-wrap;
  }

  .Calender {
    margin: 8% 0 8% 0;
    text-align: center;
    padding: 3%;
    border-radius: 15px;
    background-color: #fff;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
  }

  .bold {
    font-weight: 900;
  }
`;

export const NewsList = () => (
  <Styles>
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Tab.Container defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup className="Tab">
                {/* <ListGroup.Item action href="#link">
                  2021.8.31 // 9月の定休日について
                </ListGroup.Item> */}
                <ListGroup.Item action href="#link1">
                  2021.8.18 // 臨時休業について
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  2021.7.29 // 8月の定休日について
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                  2021.6.29 // 7月の定休日について
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                  2020.11.17 // New HP
                </ListGroup.Item>
                <ListGroup.Item action href="#link5">
                  2011.4.14 // 義援金について
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col sm={8} className="NewsSec">
              <Tab.Content className="TabFrame">
                {/* <Tab.Pane className="TabContent" eventKey="#link">
                  <h3 className="title">9月の定休日のお知らせ</h3>
                  <p className="br">
                    日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
                  </p>
                  <p className="br">
                    9月のお休みは、22日、27日となります。
                  </p>
                  <p className="br">
                    スタッフ一同お客様のお越しを心よりお待ちしております。
                  </p>
                  <TabContent />
                </Tab.Pane> */}

                <Tab.Pane className="TabContent" eventKey="#link1">
                  <h3 className="title">
                    8月23日〜9月30日の臨時休業のお知らせ
                  </h3>
                  <p className="br">
                    日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
                  </p>
                  <p className="br">
                    「岡山県からまん延防止等重点措置の要請に従い8月23日から9月30日までお休みさせて頂きます。
                    尚お休みが延長する場合がありますのでよろしくお願いします」
                  </p>
                  <p className="br">
                    スタッフ一同お客様のお越しを心よりお待ちしております。
                  </p>
                  <TabContent />
                </Tab.Pane>

                <Tab.Pane className="TabContent" eventKey="#link2">
                  <h3 className="title">8月の定休日のお知らせ</h3>
                  <p className="br">
                    日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
                  </p>
                  <p className="br">
                    8月のお休みは、2日、10日、16日、23日、24日、25日、30日となります。
                  </p>
                  <p className="br">
                    スタッフ一同お客様のお越しを心よりお待ちしております。
                  </p>
                  <TabContent />
                </Tab.Pane>

                <Tab.Pane className="TabContent" eventKey="#link3">
                  <h3 className="title">7月の定休日のお知らせ</h3>
                  <p className="br">
                    日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
                  </p>
                  <p className="br">
                    7月のお休みは、5日、12日、19日、26日となります。
                  </p>
                  <p className="br">
                    スタッフ一同お客様のお越しを心よりお待ちしております。
                  </p>
                  <TabContent />
                </Tab.Pane>

                <Tab.Pane className="TabContent" eventKey="#link4">
                  <h3 className="title">ホームページリニューアルのお知らせ</h3>
                  <p className="br">
                    日頃より、焼肉ダルマ青江店のホームページをご利用いただき、誠にありがとうございます。
                  </p>
                  <p className="br">
                    本日、ホームページの全面リニューアルをいたしました。
                  </p>
                  <p className="br">
                    当ホームページは、スマートフォンやタブレット端末からもご覧いただけるレスポンシブサイトで作成してます。
                  </p>
                  <p className="br">
                    今後とも、内容の充実を図るとともに、わかりやすく・最新の情報を発信してまいりますので、何卒よろしくお願い申し上げます。
                  </p>
                  <TabContent />
                </Tab.Pane>

                <Tab.Pane className="TabContent" eventKey="#link5">
                  <h3 className="title">義援金、店頭募金送金のご報告</h3>
                  <p className="br">
                    被災地の少しでも早い復興をお祈り申し上げます。
                  </p>
                  企業としては微力でありますが、日本赤十字社を通じて義援金をお送りいたしました。
                  引き続き店頭募金や出来る限りの支援活動は行ってまいります。
                  <p className="br">義援金</p>
                  <p className="br">焼肉ダルマ　浜店・青江店　　15万円</p>
                  <p className="br">店頭募金</p>
                  <p className="br">浜店　　　　　 　14,454円</p>
                  <p className="br">青江店　　　　　24,551円</p>
                  (すべて2011年4月14日送金) 皆様の善意に心から御礼申しあげます。
                  <TabContent />
                </Tab.Pane>
              </Tab.Content>
            </Col>

            {/* In order to if random day off happend
            <Col sm={12} className="Calender">
              <Image src={Calender} alt="Calender" fluid />
            </Col> */}
          </Row>
        </Tab.Container>
      </Col>
    </Row>
  </Styles>
);
