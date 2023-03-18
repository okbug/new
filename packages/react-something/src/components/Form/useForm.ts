import { useRef } from 'react';

export type Store = Record<string, string>;
type CallBacks = {
  onFinish: (values: Store) => void;
  onFinishFailed: (err: any[], values: Store) => void;
};
export type FormType = {
  getFieldValue: (name: string) => string;
  getFieldsValue: () => Store;
  setFieldsValue: (newStore: Store) => void;
  submit: () => void;
  setCallbacks: (callbacks: CallBacks) => void;
  registerFieldEntities: (item: FieldComponent) => void;
};
type FieldComponent = {
  props: {
    name: string;
    rules: unknown[];
  };
  onStoreChange: () => void;
};
class FormStore {
  store: Store = {};
  registerFieldEntities = (item: FieldComponent) => {
    console.log(item, 'xxxx');
    this.fieldEntities.push(item);
    console.log(this.fieldEntities, 'fieldEntities');
    return this.unregister(item);
  };
  unregister = (item: FieldComponent) => {
    this.fieldEntities = this.fieldEntities.filter(i => i !== item);
  };
  callbacks: CallBacks = {
    onFinish() {},
    onFinishFailed() {},
  };
  setCallbacks = (callbacks: CallBacks) => {
    this.callbacks = { ...this.callbacks, ...callbacks };
  };
  fieldEntities: FieldComponent[] = [];
  getFieldsValue = () => {
    return { ...this.store };
  };
  getFieldValue = (name: string) => {
    return this.store[name];
  };

  setFieldsValue = (newStore: Store) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    this.fieldEntities.forEach(component => {
      console.log(component.props.name, 'cc');
      Object.keys(newStore).forEach(key => {
        if (key === component.props.name) {
          component.onStoreChange();
        }
      });
    });
  };
  validate = () => {
    let err: unknown[] = [];

    return err;
  };
  submit = () => {
    const err = this.validate();
    const { onFinish, onFinishFailed } = this.callbacks;
    if (!err.length) {
      onFinish(this.getFieldsValue());
    } else {
      onFinishFailed(err, this.getFieldsValue());
    }
  };

  getForm: () => FormType = () => {
    const {
      getFieldsValue,
      getFieldValue,
      setFieldsValue,
      submit,
      setCallbacks,
      registerFieldEntities,
    } = this;

    return {
      getFieldValue,
      getFieldsValue,
      setFieldsValue,
      submit,
      setCallbacks,
      registerFieldEntities,
    };
  };
}
// 这里使用useState 为啥不好

export const useForm = () => {
  const formInstance = useRef<null | FormType>(null);
  if (!formInstance.current) {
    const store = new FormStore();
    formInstance.current = store.getForm();
  }
  return [formInstance.current];
};
