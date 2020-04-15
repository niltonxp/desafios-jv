import React from 'react';
import './styles.css';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function FormUser(props) {

  const onFinish = values => {
    console.log('Success:', values);
    props.handleFormSubmit(values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nome"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Por favor insira seu nome!',
          },
        ]}
      >
        <Input allowClear />
      </Form.Item>

      <Form.Item
        label="Sobrenome"
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Por favor insira seu sobrenome!',
          },
        ]}

      >
        <Input allowClear />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Adicionar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormUser;