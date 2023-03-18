import React from 'react';

import Form, { Field } from './components/Form';
import { useForm } from './components/Form/useForm';
const Playground = () => {
  const [form] = useForm();

  return (
    <div>
      <Form
        initialValues={{ username: '11', password: '22' }}
        onFinish={val => {
          console.log(val);
        }}
        form={form}
      >
        <Field name="username">
          <input placeholder="用户名" />
        </Field>
        <Field name="password">
          <input placeholder="密码" />
        </Field>
        <button>提交</button>
      </Form>
    </div>
  );
};

export default Playground;
