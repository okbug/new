import React, { useEffect, useLayoutEffect } from 'react';
import FormItem from './FormItem';
import Field from './Field';
import { Store, useForm } from './useForm';
import FieldContext from './FieldContext';
import { FormType } from './useForm';
const noop = () => {
  /** */
};
const Form = (
  props: React.PropsWithChildren<{
    onFinish?: (store: Store) => void;
    initialValues?: Store;
    form: FormType;
    onFinishFailed?: () => void;
  }>,
) => {
  const {
    onFinish = noop,
    initialValues = {},
    children,
    form,
    onFinishFailed = noop,
  } = props;

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, []);

  useEffect(() => {
    form.setCallbacks({
      onFinish,
      onFinishFailed,
    });
  }, [onFinish, onFinishFailed]);
  return (
    <form
      onSubmitCapture={e => {
        e.preventDefault();
        form.submit();
      }}
    >
      <FieldContext.Provider value={form}>{children}</FieldContext.Provider>
    </form>
  );
};

Form.FormItem = FormItem;
Form.Field = Field;
Form.useForm = useForm;
export { FormItem, Field, useForm };
export default Form;
