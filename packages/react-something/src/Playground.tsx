import React from 'react';

import Form, { Field } from './components/Form';
import { useForm } from './components/Form/useForm';
const Playground = () => {
  const [form] = useForm();

  return (
    <div>
      <Form
        initialValues={{ username: '', password: '' }}
        onFinish={values => {
          console.log('完成:', values);
          console.log(form.getFieldsValue());
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
