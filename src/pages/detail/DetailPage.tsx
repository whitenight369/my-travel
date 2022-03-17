import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
interface MatchParams{
    touristRouteId:string
}
const DetailPage: React.FunctionComponent<RouteComponentProps<MatchParams>> = (props) => {
  return <h1>旅游路线详情:{props.match.params.touristRouteId}</h1> ;
};

export default DetailPage;
 