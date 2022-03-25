import { Form, Input,Button,Checkbox } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styles from './RegisterForm.module.css';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  export const RegisterForm=()=>{
    const history=useHistory();

    const onFinish =async (values: any) => {
        console.log("Success:", values);
        try{
            await axios.post("https://console-mock.apipost.cn/app/mock/project/bda5e1f9-5f62-4812-89b4-10dabd7e32b0/mytravel/register",{
                password:values.password,
                username:values.username
            })
            // .then(res=>{
            //     console.log("res",res)
            // });
            history.push('/signIn/');
        }catch(error){
            alert("注册失败!");
        }
      };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
      };
    return (
        <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={styles["register-form"]}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirm"
        hasFeedback
        rules={[
          { required: true, message: "Please input your confirm password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("密码确认不一致！");
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
    )
  }