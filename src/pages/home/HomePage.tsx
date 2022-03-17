import React, { Component } from 'react';
import { Col, Row, Typography } from 'antd';
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners } from './../../components';
import { productList1, productList2, productList3 } from "./mockups";
import styles from './HomePage.module.css';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import {withTranslation,WithTranslation} from 'react-i18next';



class HomePageComponent extends Component<WithTranslation> {
  state = {}

  render() {
    const {t}=this.props;
    return (
      <div>
        <Header />
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          <ProductCollection
            title={<Typography.Title level={3} type="warning"> {t("home_page.hot_recommended")}</Typography.Title>}
            sideImage={sideImage}
            products={productList1}
          />
          <ProductCollection
            title={<Typography.Title level={3} type="warning">   {t("home_page.new_arrival")}</Typography.Title>}
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={<Typography.Title level={3} type="warning">    {t("home_page.domestic_travel")}</Typography.Title>}
            sideImage={sideImage3}
            products={productList3}
          />
        </div>
        <BusinessPartners />
        <Footer />
      </div>
    )
  }
}
export const HomePage=withTranslation()(HomePageComponent);
