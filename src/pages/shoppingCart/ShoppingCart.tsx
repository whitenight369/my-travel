import { Affix, Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PaymentCard, ProductList } from '../../components';
import { MainLayout } from '../../layouts/mainLayout';
import { useSelector } from '../../redux/hooks';
import { checkout, clearShoppingCartItem } from '../../redux/shoppingcart/slice';
import styles from './ShoppingCart.module.css';

interface IShoppingCartProps {
}

export const ShoppingCart: React.FC<IShoppingCartProps> = (props) => {
    const loading=useSelector(s=>s.shoppingCart.loading);
    const shoppingCartItems=useSelector(s=>s.shoppingCart.items);
    const jwt=useSelector(s=>s.user.token) as string;
    const dispatch=useDispatch();
    const history=useHistory();

        console.log("shoppingCartItems",shoppingCartItems)
  return (
        <MainLayout>
            <Row>
                {/* 购物车清单 */}
                <Col span={16}>
                    <div className={styles['product-list-container']}>
                        <ProductList  data={shoppingCartItems}/>
                    </div>
                </Col>
                {/* 支付卡组件 */}
                <Col span={8}>
                    <Affix>
                        <div className={styles['payment-card-container']}>
                                <PaymentCard
                                    loading={loading}
                                    originalPrice={
                                        shoppingCartItems.map(s=>s.originalPrice)
                                        .reduce((a,b)=>a+b,0)
                                    }
                                    price={
                                        shoppingCartItems.map(
                                            s=>s.originalPrice*(s.discountPresent?s.discountPresent:1)
                                        ).reduce((a,b)=>a+b,0)
                                    }
                                    onCheckout={
                                        ()=>{
                                            if(shoppingCartItems.length<=0){
                                                return ;
                                            }
                                            dispatch(checkout(jwt));
                                            history.push('/placeOrder');
                                        }
                                    }
                                    onShoppingCartClear={()=>{
                                        dispatch(clearShoppingCartItem({jwt,itemIds:shoppingCartItems.map(s=>s.id)}))
                                    }}
                                />
                        </div>
                    </Affix>
                </Col>
            </Row>
        </MainLayout>
  );
};



