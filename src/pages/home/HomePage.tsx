import React, { Component } from 'react';
import { Col, Row, Typography, Spin } from 'antd';
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners } from './../../components';
// import { productList1, productList2, productList3 } from "./mockups";
import axios from 'axios';
import styles from './HomePage.module.css';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { RootState } from '../../redux/store';
import {  giveMeDataActionCreator } from '../../redux/recommandProducts/recommendProductsAction';
import { MainLayout } from '../../layouts/mainLayout';

type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class HomePageComponent extends Component<PropsType> {
  componentDidMount() {
    this.props.giveMeData();  
  }

  render() {
    // console.log(this.props);
    
    const { t ,productList,loading,error} = this.props;
    const [productList1, productList2, productList3] = productList;
    if (loading) {
      return (
        <Spin
          size='large'
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%"
          }}
        />
      )
    }
    if (error) {
      return <div>{error}</div>
    }
    return (
      <MainLayout>

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
 
        <BusinessPartners />
      </MainLayout>
    )
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProductsReducer.loading,
    error: state.recommendProductsReducer.error,
    productList: state.recommendProductsReducer.productList
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    giveMeData:()=>{
      dispatch(giveMeDataActionCreator())
    }
  }
}
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePageComponent));
