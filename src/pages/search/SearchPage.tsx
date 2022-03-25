import { Spin } from 'antd';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { FilterArea, Footer, Header, ProductList } from '../../components';
import { useSelector } from '../../redux/hooks';
import { searchProduct } from '../../redux/productSearch/slice';
import styles from './SearchPage.module.css';
interface ISearchPageProps {
}

interface MatchParam{
    keywords:string;
}

const SearchPage: React.FC<ISearchPageProps> = (props) => {
    const {keywords}=useParams<MatchParam>();
    const loading = useSelector((state) => state.productSearch.loading);
    const error = useSelector((s) => s.productSearch.error);
    const pagination = useSelector((s) => s.productSearch.pagination);
    const productList = useSelector((s) => s.productSearch.data);
  
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(()=>{
        dispatch(searchProduct({nextPage:1,pageSize:10,keywords}))
    },[]);
    useEffect(()=>{
        dispatch(searchProduct({nextPage:1,pageSize:10,keywords}))
    },[location]);
    const onPageChange=(nextPage: any,pageSize: any)=>{
        dispatch(searchProduct({nextPage,pageSize,keywords}))
    }
    if (loading) {
        return (
          <Spin
            size="large"
            style={{
              marginTop: 200,
              marginBottom: 200,
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
            }}
          />
        );
      }
      if (error) {
        return <div>网站出错：{error}</div>;
      }
  return <>
    <Header/>
        <div className={styles['page-count']}>
            {/* 分类过滤器 */}
            <div className={styles['product-list-container']}>
                <FilterArea/>
            </div>
            {/* 产品列表 */}
            <div className={styles['product-list-container']}>
                <ProductList
                    data={productList}
                    paging={{
                        currentPage:1,
                        pageSize:5,
                        totalCount:10
                    }}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    <Footer/>
  </>;
};

export default SearchPage;
