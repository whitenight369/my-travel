import * as React from 'react';
import styles from './Header.module.css';
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import logo from './../../assets/logo.svg';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { addLanguageActionCreator, changeLangueActionCreator } from '../../redux/langue/langueAction';
import { useTranslation } from 'react-i18next';
export const Header: React.FC = () => {
    const history = useHistory();
    const match = useRouteMatch();
    const location = useLocation();
    const params = useParams();
    const language = useSelector(state => state.languageReducer.language);
    const languageList = useSelector(state => state.languageReducer.languageList);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const menuClickHandler = (e: any) => {
        if (e.key === "new") {
            // 处理新语言添加action
            dispatch(addLanguageActionCreator("新语言", "new_lang"))
        } else {
            dispatch(changeLangueActionCreator(e.key))
        }
    }

    return (<>
        <div className={styles['app-header']}>
            {/* top-header */}
            <div className={styles['top-header']}>
                <div className={styles.inner}>
                    <Typography.Text>让旅游更幸福</Typography.Text>
                    <Dropdown.Button
                        style={{ marginLeft: 15 }}
                        overlay={
                            <Menu onClick={menuClickHandler}>
                                {languageList.map((l) => {
                                    return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                                })}
                                <Menu.Item key={"new"}>
                                    {t("header.add_new_language")}
                                </Menu.Item>
                            </Menu>
                        }
                        icon={<GlobalOutlined />}
                    >
                        {language === "zh" ? "中文" : "English"}
                    </Dropdown.Button>
                    <Button.Group className={styles['button-group']}>
                        <Button onClick={() => history.push('register')}>注册</Button>
                        <Button onClick={() => history.push('signIn')}>登录</Button>
                    </Button.Group>
                </div>
            </div>
            <Layout.Header className={styles['main-header']}>
                <span onClick={() => history.push('/')}>
                    <img src={logo} className={styles['App-logo']} />
                    <Typography.Title className={styles['title']} level={3}>React 旅游网</Typography.Title>
                </span>
                <Input.Search
                    placeholder='请输入旅游目的地,主题,或者关键字'
                    className={styles['search-input']}
                />
            </Layout.Header >
            <Menu mode='horizontal' className={styles['main-menu']}>
                <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
                <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
                <Menu.Item key="3"> {t("header.group")} </Menu.Item>
                <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
                <Menu.Item key="5"> {t("header.private")} </Menu.Item>
                <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
                <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
                <Menu.Item key="8"> {t("header.local")} </Menu.Item>
                <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
                <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
                <Menu.Item key="11"> {t("header.study")} </Menu.Item>
                <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
                <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
                <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
                <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
                <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
            </Menu>
        </div>
    </>)
};

