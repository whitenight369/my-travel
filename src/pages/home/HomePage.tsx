import React, { Component } from 'react';
import { Col, Row, Typography } from 'antd';
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners } from './../../components';
import { productList1, productList2, productList3 } from "./mockups";
import styles from './HomePage.module.css';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';

interface Props {

}
interface State {

}

export class HomePage extends Component<Props, State> {
  state = {}

  render() {
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
            title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
            sideImage={sideImage}
            products={productList1}
          />
          <ProductCollection
            title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
            sideImage={sideImage2}
            products={productList2}
          />
          <ProductCollection
            title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>}
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
