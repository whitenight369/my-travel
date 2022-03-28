import React, { useEffect } from 'react';
import styles from './App.module.css';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom';
import {HomePage, PlaceOrder, RegisterPage, ShoppingCart, SignInPage} from './pages';
import DetailPage from './pages/detail/DetailPage';
import SearchPage from './pages/search/SearchPage';
import { useSelector } from './redux/hooks';
import { useDispatch } from 'react-redux';
import { getShoppingCart } from './redux/shoppingcart/slice';

interface Private{
  component:any,
  isAuthenticated:boolean,
  path:string,
}

const PrivateRoute=({component,isAuthenticated,...rest}:Private)=>{
  const routeComponent=(props: any)=>{
    return isAuthenticated?(
     React.createElement(component,props)
    ):(
      <Redirect to={{pathname:"/signIn"}} />
    );
  }
  return <Route render={routeComponent} {...rest}/>
}

function App() {
  const jwt=useSelector(s=>s.user.token);
  const dispatch=useDispatch();

  useEffect(()=>{
    if(jwt){
      // console.log("dasdajkbafbh");
      dispatch(getShoppingCart(jwt))
    }
  },[jwt])
  return (
    <div className={styles.App}>
      <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route path={'/signIn'} component={SignInPage}/> 
        <Route path={'/register'} component={RegisterPage} />
        <Route path={'/detail/:touristRouteId'} component={DetailPage} />
        <Route path={'/search/:keywords?'} component={SearchPage}/>
        <PrivateRoute isAuthenticated={jwt!==null} path="/shoppingCart" component={ShoppingCart} />
        <PrivateRoute isAuthenticated={jwt!==null} path="/placeOrder" component={PlaceOrder} />
        <Route render={()=><h1>404 not Found</h1>} />
      </Switch>     
      </BrowserRouter>
    </div>
  );
}

export default App;
