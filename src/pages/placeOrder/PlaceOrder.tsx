import { Row ,Col} from "antd";
import { useDispatch } from "react-redux";
import { CheckOutCard, PaymentForm } from "../../components";
import { MainLayout } from "../../layouts/mainLayout";
import { useSelector } from "../../redux/hooks";
import { placeOrder } from "../../redux/order/slice";

interface IPlaceOrderProps {
}

export const PlaceOrder: React.FC<IPlaceOrderProps> = (props) => {
    const jwt=useSelector(s=>s.user.token) as string;
    const dispatch=useDispatch();
    const order=useSelector(s=>s.order.currentOrder);
    const loading=useSelector(s=>s.order.loading);

    // console.log("order",order);
    

  return(
      <MainLayout>
          <Row>
              <Col span={12}>
                  <PaymentForm/>
              </Col>
              <Col span={12}>
                  <CheckOutCard
                    loading={loading}
                    order={order}
                    onCheckout={
                        ()=>{
                            dispatch(placeOrder({jwt,orderId:order.id}))
                        }
                    }
                  />
              </Col>
          </Row>
      </MainLayout>
  ) ;
};


