import { Row ,Col} from "antd";
import { CheckOutCard, PaymentForm } from "../../components";
import { MainLayout } from "../../layouts/mainLayout";

interface IPlaceOrderProps {
}

export const PlaceOrder: React.FC<IPlaceOrderProps> = (props) => {
  return(
      <MainLayout>
          <Row>
              <Col span={12}>
                  <PaymentForm/>
              </Col>
              <Col span={12}>
                  {/* <CheckOutCard/> */}
              </Col>
          </Row>
      </MainLayout>
  ) ;
};


