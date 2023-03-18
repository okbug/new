import React from 'react';
import FormItem from './FormItem';
import Field from './Field';
import { useForm } from './useForm';
import FieldContext from './FieldContext';
import { FormType } from './useForm';
const Form = (
  props: React.PropsWithChildren<{
    onFinish?: (val: string) => void;
    initialValues?: Record<string, string>;
    form: FormType;
  }>,
) => {
  const { onFinish, initialValues, children, form } = props;

  return (
    <form
      onSubmitCapture={e => {
        e.preventDefault();
        onFinish?.('111');
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
